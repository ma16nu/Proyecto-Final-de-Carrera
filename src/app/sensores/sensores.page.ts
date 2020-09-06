import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{SensoresService} from './sensores.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.page.html',
  styleUrls: ['./sensores.page.scss'],
})
export class SensoresPage implements OnInit {
  sensores=[]
  constructor(private router:Router, private sensoresService: SensoresService) {}

  ngOnInit() {
    this.sensores  = this.sensoresService.getSensores()

  }
  goprincipal() {
    this.router.navigate(['/home']);
  }
}
