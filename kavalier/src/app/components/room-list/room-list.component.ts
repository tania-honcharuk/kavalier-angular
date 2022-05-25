import { Component, OnInit } from '@angular/core';
import { ROOMS } from './mock-rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms = ROOMS;
  constructor() { }

  ngOnInit(): void {
  }

}
