import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialpacientePage } from './historialpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialpacientePage
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'add-paciente',
    loadChildren: () => import('./add-paciente/add-paciente.module').then( m => m.AddPacientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialpacientePageRoutingModule {}
