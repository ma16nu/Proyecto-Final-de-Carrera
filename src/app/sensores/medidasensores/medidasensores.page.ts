import { Component, OnInit } from '@angular/core';
import { Sensores } from './sensores.mode';
import {ActivatedRoute} from '@angular/router';
import{SensoresService} from'../sensores.service';
@Component({
  selector: 'app-medidasensores',
  templateUrl: './medidasensores.page.html',
  styleUrls: ['./medidasensores.page.scss'],
})
export class MedidasensoresPage implements OnInit {
  
  sensores: Sensores;
  constructor(private activatedRoute: ActivatedRoute, private sensoresService: SensoresService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const senId = paramMap.get('senId')
       this.sensores = this.sensoresService.getSensor(senId);
       console.log(this.sensores)
  })
}
}
