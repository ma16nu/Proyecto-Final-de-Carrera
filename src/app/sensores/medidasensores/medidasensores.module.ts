import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasensoresPageRoutingModule } from './medidasensores-routing.module';

import { MedidasensoresPage } from './medidasensores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasensoresPageRoutingModule
  ],
  declarations: [MedidasensoresPage]
})
export class MedidasensoresPageModule {}
