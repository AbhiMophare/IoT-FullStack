import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeadComponent } from './head/head.component';
import { ThingsComponent } from './things/things.component';
import { SensorsComponent } from './sensors/sensors.component';
import { DeviceComponent } from './device/device.component';
import { SwitchComponent } from './device/switch/switch.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeadComponent,
    ThingsComponent,
    SensorsComponent,
    DeviceComponent,
    SwitchComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
