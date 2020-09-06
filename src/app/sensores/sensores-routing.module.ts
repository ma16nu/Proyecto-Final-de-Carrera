import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensoresPage } from './sensores.page';

const routes: Routes = [
  {
    path: '',
    component: SensoresPage
  },
  {
    path: 'medidasensores',
    loadChildren: () => import('./medidasensores/medidasensores.module').then( m => m.MedidasensoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensoresPageRoutingModule {}
