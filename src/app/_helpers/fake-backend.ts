import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';
import {IUser} from '../model/user';

let users: IUser[] = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      // tslint:disable-next-line:max-line-length
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/login') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.endsWith('/register') && method === 'POST':
          return register();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const {email, password} = body;
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) {
        return error('email or password is incorrect');
      }
      return ok({
        id: user.id,
        username: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      });
    }


    function register() {
      const user = body;

      if (users.find(x => x.email === user.email)) {
        return error('Email "' + user.email + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) {
        return unauthorized();
      }

      // tslint:disable-next-line:triple-equals
      const user = users.find(x => x.id == idFromUrl());
      return ok(user);
    }

    function deleteUser() {
      if (!isLoggedIn()) {
        return unauthorized();
      }

      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function updateInfo() {
      let info = getUserInfo();
      if (info.email === null || info.password === null) {
        return Observable.throw('Please fill all fields');
      } else {
        return Observable.create(observer => {
          observer.next(true);
          observer.complete();
        });
      }
    }

    function getUserInfo(): IUser {
      return this.currentUser;
    }

    // helper functions

    // tslint:disable-next-line:no-shadowed-variable
    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message) {
      return throwError({error: {message}});
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      // tslint:disable-next-line:radix
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};