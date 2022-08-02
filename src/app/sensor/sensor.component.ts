import { Component, OnInit } from '@angular/core';
import { IsensorData } from '../data/isensor-data';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {
  name: string = 'Temperature';
  value: number = 88;
  constructor() {}

  ngOnInit() {}
}
