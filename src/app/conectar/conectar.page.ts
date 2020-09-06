import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-conectar',
  templateUrl: './conectar.page.html',
  styleUrls: ['./conectar.page.scss'],
})
export class ConectarPage{
  pairedList: pairedList;
  listToggle: boolean = false;
  pairedDeviceID: number=0;
  dataSend: string ="";

  constructor(private router:Router, private bluetoothSerial:BluetoothSerial,private alertController:AlertController, private toastController:ToastController) {
    this.checkBluetoohEnable();
   }


  goprincipal() {
    this.router.navigate(['/home']);
  }
 checkBluetoohEnable(){
    this.bluetoothSerial.isEnabled().then(success=>{
      this.listPairedDevices();
    },error=>{
      this.showError("Por Favor Activar Bluetooth")
    });
  }
 listPairedDevices(){
   this.bluetoothSerial.list().then(success=>{
     this.pairedList = success;
     this.listToggle= true;
   },error=>{
     this.showError("Por Favor Activar Bluetooth")
   });
 }
 selectDevice(){
   let connectedDevice= this.pairedList[this.pairedDeviceID];
   if(!connectedDevice.address){
     this.showError('Selecione el disposito para conectarse')
     return;
   }
   let address = connectedDevice.address;
   let name = connectedDevice.name;

   this.connect(address);
 }
  connect(address){
    //Attempt to connect device with specified address, call app.deviceConnected i success
    this.bluetoothSerial.connect(address).subscribe(success=>{
      this.deviceConnected();
      this.showToast("Conexion Correcta");
    },error=>{
      this.showError("Error:Activar Bluetooth");
    });
  }
  deviceConnected(){
    //Subsribe to data receiving as soon as the delimiter ir read
    this.bluetoothSerial.subscribe('\n').subscribe(success=>{
      this.handleData(success);
      this.showToast("Conexion Correcta");
    }, error=>{
      this.showError(error);
    });
  }

  deviceDisconnected(){
    //Unsubscribe from data receiving
    this.bluetoothSerial.disconnect()
    this.showToast("Desconexión del dispositivo");
  }
  handleData(data){
    this.showToast(data);
  }
  
  sendData(){
    this.dataSend+='\n';
    this.showToast("Desconexión del dispositivo");
    this.bluetoothSerial.write(this.dataSend).then(success=>{
      this.showToast(success);
    },error=>{
      this.showError(error)
    });
  }
  async showError(error){
    let alert = await this.alertController.create({
      header: 'Error',
      subHeader: error,
      buttons:['Descartar']
    });
    await alert.present();
  }
  async showToast(msj){
    const toast = await this.toastController.create({
      message: msj,
      duration: 1000
    });
    await toast.present();
  }
}
interface pairedList{
  "class":number,
  "id":string,
  "address":string,
  "name":string
}