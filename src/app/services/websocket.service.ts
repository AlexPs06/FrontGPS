import { Injectable } from '@angular/core';
import { Socket} from 'ngx-socket-io';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus=false;
  public lat: number;
  public lng: number;

  constructor(
    private socket : Socket
  ) { 
    this.checkStatus();
  }
  checkStatus(){
    console.log('ejecutando')
    this.socket.on('connect',()=>{
      console.log('conectado')
      this.socketStatus=true;
      
    })
    this.socket.on('disconnect',()=>{
      console.log('Desconectado')
      this.socketStatus=false;
    })
    
    if (localStorage.getItem("token")!=undefined) {
      console.log(localStorage.getItem("token"))
      this.socket.emit('validacion', {latitud:'16.7470571',longitud:'-93.1864945'});
      
      this.socket.on('localizacion',(data)=>{
        this.lat= parseFloat( data.latitud)
        this.lng=parseFloat(data.longitud)
        //localStorage.setItem("longitud",data.longitud)
        //localStorage.setItem("latitud",data.latitud)
      })
    }
    

  }
}
