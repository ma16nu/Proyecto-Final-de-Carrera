import { Injectable } from '@angular/core';
import {Pacientes} from './historialpaciente.model'

@Injectable({
  providedIn: 'root'
})
export class HistorialpacienteService {

  private pacientes: Pacientes[] = [
    {
      jd:'1',
      nombre:'Juan',
      edad:'65',
      altura:'175',
      peso:'80',
    },
    {
      jd:'2',
      nombre:'Antonio',
      edad:'45',
      altura:'180',
      peso:'83',
    }
  ]

  constructor() { }
  gethistorialpacientes(){
    return [...this.pacientes]
  }

  gethistorialpaciente(pacientesJd: string) {
    return{
       ...this.pacientes.find(pacientes =>{
        return pacientes.jd === pacientesJd
      })
    }
  }

  addpaciente(nombre:string, edad:string, altura:string, peso:string){
    this.pacientes.push({
      nombre,
      edad,
      altura,
      peso,
      jd: this.pacientes.length + 1 + ""
    });
  }

  borrarpaciente(pacientesJd:string){
    this.pacientes = this.pacientes.filter(pacientes=>{
     return pacientes.jd !== pacientesJd
    })
  }
}
