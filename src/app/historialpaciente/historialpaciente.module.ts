import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialpacientePageRoutingModule } from './historialpaciente-routing.module';

import { HistorialpacientePage } from './historialpaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialpacientePageRoutingModule
  ],
  declarations: [HistorialpacientePage]
})
export class HistorialpacientePageModule {}
