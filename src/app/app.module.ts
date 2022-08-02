import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeadComponent } from './head/head.component';
import { ThingsComponent } from './things/things.component';
import { SensorComponent } from './sensor/sensor.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeadComponent,
    ThingsComponent,
    SensorComponent,
    DeviceComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
