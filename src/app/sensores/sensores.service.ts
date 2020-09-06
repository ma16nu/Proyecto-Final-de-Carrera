import { Injectable } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {Sensores} from './medidasensores/sensores.mode'
@Injectable({
  providedIn: 'root'
})
export class SensoresService {

  private sensores: Sensores[] = [
  {
   id:'1',
   title:'Temperatura Corporal',
   imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/sensor_dedo_puesto_small.png',
   comments:["Temperatura: 37"]
  },
  {
    id:'2',
    title:'Respuesta Galvánica',
    imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/step_3_finger_GSR_small.png',
    comments:["Conductividad: 4.2"]
   },
   
   {
      id:'3',
      title:'Oxígeno en Sangre',
      imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/pulse_and_oxygen_finger_connection_big.png',
      comments:["Oxígeno en sangre: 98"]
     },
     { id:'4',
      title:'Pulso',
      imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/pulse_and_oxygen_in_blood_sensor_big.png',
      comments:["Pulsaciones:68 "]
    },
    { id:'5',
      title:'Electrocardiograma',
      imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/ECG_connected_e_health_small.png',
      comments:["ECG:"]
    },
    {
      id:'6',
      title:'Posición del Paciente',
      imageURL:'https://www.cooking-hacks.com/media/cooking/images/documentation/e_health_v2/body_position_sensor_e_health_small.png',
      comments:["Posición:"]
      }
 ]

 constructor() {}
   
  getSensores(){
    return [...this.sensores]
  }


  getSensor(sensoresId:string){
   return{
     ...this.sensores.find(sensores=>{
      return sensores.id === sensoresId
    })
   }
  }
  addSensores(title: string, imageURL:string){
    this.sensores.push({
      title,
      imageURL,
      comments:[],
      id: this.sensores.length + 1 + ""
    });
  }

  deleteMenu(sensoresId:string){
    this.sensores = this.sensores.filter(sensores=> {
     return sensores.id !== sensoresId
    })
  }

}