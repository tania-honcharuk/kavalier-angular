import { Component, OnInit } from '@angular/core';
import { ADVANTAGES } from './mock-advantages';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  advantages = ADVANTAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
