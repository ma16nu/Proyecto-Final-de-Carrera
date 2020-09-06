import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialpacienteService } from '../historialpaciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.page.html',
  styleUrls: ['./add-paciente.page.scss'],
})
export class AddPacientePage implements OnInit {

  constructor(private historialpacienteService:HistorialpacienteService, private router:Router) { }

  ngOnInit() {
  }
  
  goprincipal() {
    this.router.navigate(['/home']);
  }

  guardarpaciente(nombre:HTMLInputElement,edad:HTMLInputElement,altura:HTMLInputElement,peso:HTMLInputElement){
    this.historialpacienteService.addpaciente(nombre.value,edad.value,altura.value,peso.value);
    this.router.navigate(['/historialpaciente']);
  }
}
