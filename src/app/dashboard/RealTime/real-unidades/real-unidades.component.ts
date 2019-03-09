import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-real-unidades',
  templateUrl: './real-unidades.component.html',
  styleUrls: ['./real-unidades.component.css']
})
export class RealUnidadesComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 16.7470622;
  lng: number = -93.1864945;
  formGPS : FormGroup
  submit=false
  datas =[]
  exitsData = false
  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    public websocket: WebsocketService
    ) {
      this.formGPS = this.formbuilder.group({
        Latitud : ['', Validators.required],
        Longitud : ['', Validators.required],
        Fecha : ['', Validators.required],
        Hora : ['', Validators.required],
        Imei : ['', Validators.required],
        Dispositivo : ['', Validators.required],
      })
     }

  ngOnInit() {
    console.log(this.lat)
    console.log(this.lng)
  }
  addGPS(){
    this.submit=true;
    if(this.formGPS.invalid){
      return;
    }
    this.submit=false;
    this.postUnidades();
  }
  postUnidades(){
    this.api.postGPS(this.formGPS.value).subscribe(
      response => {
        console.log(response)
        this.exitsData = true
      },error =>{
        this.exitsData = false
      }
    )
  }

}
