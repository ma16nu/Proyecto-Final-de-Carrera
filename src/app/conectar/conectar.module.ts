import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectarPageRoutingModule } from './conectar-routing.module';

import { ConectarPage } from './conectar.page';
import{BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectarPageRoutingModule
  ],
  declarations: [ConectarPage],
  providers:[
    BluetoothSerial 
  ]
})
export class ConectarPageModule {}
