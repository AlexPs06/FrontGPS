import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-unidades',
  templateUrl: './form-unidades.component.html',
  styleUrls: ['./form-unidades.component.css']
})
export class FormUnidadesComponent implements OnInit {
  formUnidades : FormGroup
  submit=false
  datas =[]
  unidad: any  =localStorage.getItem("unidad")
  idUnidad=""

  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    private websocket: WebsocketService,
    private router: Router
    ) {
      this.formUnidades = this.formbuilder.group({
        Placa : ['', Validators.required],
        User : ['', Validators.required],
        Marca : ['', Validators.required],
        Modelo : ['', Validators.required],
        Dispositivo : ['', Validators.required],
        Imei : ['', Validators.required],

      })
     }

  ngOnInit() {
    if (this.unidad!=undefined) {

      this.idUnidad = localStorage.getItem('idUsuario')
      console.log(this.idUnidad)
      this.formUnidades.get("Placa").setValue(localStorage.getItem("Placa"))
      this.formUnidades.get("User").setValue(localStorage.getItem("User"))
      this.formUnidades.get("Marca").setValue(localStorage.getItem("Marca"))
      this.formUnidades.get("Modelo").setValue(localStorage.getItem("Modelo"))
      this.formUnidades.get("Dispositivo").setValue(localStorage.getItem("Dispositivo"))
      this.formUnidades.get("Imei").setValue(localStorage.getItem("Imei"))
      localStorage.removeItem("Placa");
      localStorage.removeItem("User");
      localStorage.removeItem("Marca");
      localStorage.removeItem("Modelo");
      localStorage.removeItem("Dispositivo");
      localStorage.removeItem("Imei");
      localStorage.removeItem("unidad")

    }
  }

  addUnidades(){
    this.submit=true;
    if(this.formUnidades.invalid){
      return;
    }
    this.submit=false;
    this.postUnidades();
  }

  postUnidades(){
    this.api.postUnidades(this.formUnidades.value).subscribe(
      response => {
        console.log(response)
        console.log("si se pudo")
      }
    )
  }
  editarUnidades(){
    this.api.editUnidades(this.formUnidades.value, this.idUnidad).subscribe(response => {
      console.log('R: ' + response)
      
      this.router.navigateByUrl("/views/unidades");
    }, error => {
      console.log('Error: ' + error)
    })
  }
}
