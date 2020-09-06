import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedidasensoresPage } from './medidasensores.page';

const routes: Routes = [
  {
    path: '',
    component: MedidasensoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedidasensoresPageRoutingModule {}
