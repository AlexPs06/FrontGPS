import { Component } from '@angular/core';
import {WebsocketService} from 'src/app/services/websocket.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoanguar2';
  constructor(
    private websocket : WebsocketService
  ){
    
  }  
}

