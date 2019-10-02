import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {House} from '../../house';
import {HouseService} from '../../house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  enable = false;
  houses: House[];
  @Output() houseClick = new EventEmitter<House>();

  message: string;

  constructor(private houseService: HouseService) {
  }

  ngOnInit() {
    this.getList();
  }
  getList() {
    const updateHousesEvent = this.houseService.getListRealtime();

    updateHousesEvent.subscribe( newList => {
      this.houses = newList;
    }, error => {
      console.log('error', error);
      this.message = error.message;
    });
  }
  selectHouse(house: House) {
    this.houseClick.emit(house);
  }


  toggleEnable() {
    this.enable = !this.enable;
  }

}
