import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from'@angular/router'
import { HistorialpacienteService } from '../historialpaciente.service';
import{AlertController} from '@ionic/angular';
import { Pacientes } from '../historialpaciente.model';
import { Button } from 'protractor';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

   pacientes: Pacientes;
  constructor(private activatedroute: ActivatedRoute, private historialpacienteService: HistorialpacienteService, private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      //redirect
     const recipejd = paramMap.get('pacientesJd')
     this.pacientes = this.historialpacienteService.gethistorialpaciente(recipejd);
     console.log(this.pacientes)
    })
  }

 async borrar(){
      const alertElement = await this.alertcontroller.create({
      header: '¿Estas seguro que deseas borrar el paciente?',
      message: 'Una vez borrado no apareceran más sus datos',
      buttons: [
        {
        text:'Cancelar',
        role:'cancel'
      },
      {
        text:'Aceptar',
         handler:()=> {
          this.historialpacienteService.borrarpaciente(this.pacientes.jd);
          this.router.navigate(['/historialpaciente'])
         }
      }
    ]  
    });
   await alertElement.present();
  }


}
