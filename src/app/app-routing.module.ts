import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
   { path: '', redirectTo:'home', pathMatch:'full'},
   { path:'home', 
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
   {
     path: 'historialpaciente',
     children:[
      { 
        path:"",
       loadChildren: () => import('./historialpaciente/historialpaciente.module').then( m => m.HistorialpacientePageModule),
      },
      {
        path:":pacientesJd",
        loadChildren: () => import('./historialpaciente/datos/datos.module').then(m=>m.DatosPageModule),
       } 
  ]
  },
    {
      path:'add-paciente',
      loadChildren: () => import('./historialpaciente/add-paciente/add-paciente.module').then(m=>m.AddPacientePageModule),
     },
  {
    path: 'conectar',
    loadChildren: () => import('./conectar/conectar.module').then( m => m.ConectarPageModule)
  },
  {
    path: 'sensores',
    children:[
      {
        path:"",
        loadChildren: () => import('./sensores/sensores.module').then(m=>m.SensoresPageModule)
      },
      {
         path:":senId", 
         loadChildren:() => import('./sensores/medidasensores/medidasensores.module').then(m=>m.MedidasensoresPageModule),
      }
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
