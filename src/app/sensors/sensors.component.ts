import { Component, OnInit } from '@angular/core';
import { IsensorData } from '../data/isensor-data';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
})
export class SensorsComponent implements OnInit {
  name: string = 'Temperature';
  value: number = 88;
  constructor() {}

  ngOnInit() {}
}
