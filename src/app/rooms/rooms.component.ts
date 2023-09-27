import { Component } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'ngfp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass'],
})
export class RoomsComponent {
  hotelName: string = 'Paris Hilton Hotel';

  room: Room = {
    totalRooms: 20,
    availableRooms: 5,
    bookedRooms: 15,
  };

  increaseBookedRooms() {
    if (this.room.bookedRooms < 20) {
      this.room.bookedRooms += 1;
      this.room.availableRooms = this.room.totalRooms - this.room.bookedRooms;
    }
  }

  decreaseBookedRooms() {
    if (this.room.bookedRooms > 0) {
      this.room.bookedRooms -= 1;
      this.room.availableRooms = this.room.totalRooms - this.room.bookedRooms;
    }
  }
}
