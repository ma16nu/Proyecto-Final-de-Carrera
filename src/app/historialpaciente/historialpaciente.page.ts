import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HistorialpacienteService} from './historialpaciente.service'
@Component({
  selector: 'app-historialpaciente',
  templateUrl: './historialpaciente.page.html',
  styleUrls: ['./historialpaciente.page.scss'],
})
export class HistorialpacientePage implements OnInit {
     
    pacientes = []
   constructor(private historialpacienteService:HistorialpacienteService , private router:Router) { }
   
   ngOnInit() {
     this.pacientes = this.historialpacienteService.gethistorialpacientes()
  }

  ionViewWillEnter(){
    this.pacientes = this.historialpacienteService.gethistorialpacientes();
  }

  goprincipal() {
    this.router.navigate(['/home']);
  }
  
  nuevopaciente(){
    this.router.navigate(['add-paciente']);
  }

}
