import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-equipos',
  templateUrl: './form-equipos.component.html',
  styleUrls: ['./form-equipos.component.css']
})
export class FormEquiposComponent implements OnInit {
  formEquipos : FormGroup
  submit=false
  datas =[]
  idEquipo = ""
  isAdd = true

  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    private websocket: WebsocketService,
    private router : Router
    ) {
      this.formEquipos = this.formbuilder.group({
        Imei : ['', Validators.required],
        Marca : ['', Validators.required],
        Modelo : ['', Validators.required],
        Color : ['', Validators.required],
      })
     }

  ngOnInit() {

    if(localStorage.getItem('action') == 'editar'){
      this.isAdd = false
      this.idEquipo = localStorage.getItem('idEquipo')
    this.formEquipos.get('Imei').setValue(localStorage.getItem('imei'))
    this.formEquipos.get('Marca').setValue(localStorage.getItem('marca'))
    this.formEquipos.get('Modelo').setValue(localStorage.getItem('modelo'))
    this.formEquipos.get('Color').setValue(localStorage.getItem('color'))
    localStorage.removeItem('imei')
    localStorage.removeItem('marca')
    localStorage.removeItem('modelo')
    localStorage.removeItem('color')
    localStorage.removeItem('action')
    }

    
  }

  addEquipo(){
    this.submit=true;
    if(this.formEquipos.invalid){
      return;
    }
    this.submit=false;
    this.postEquipos();
  }

  postEquipos(){
    this.api.postEquipos(this.formEquipos.value).subscribe(
      response => {
        // console.log("entre")
        console.log(response)
        console.log("si se pudo")
      }
    )
  }

  editDevice(){
    this.submit=true;
    if(this.formEquipos.invalid){
      return;
    }
    this.submit=false;
    this.callEditMethod()
  }

  callEditMethod(){
    this.api.editDevice(this.formEquipos.value, this.idEquipo).subscribe(
      response =>{
        this.router.navigateByUrl("/views/equipos");

      },error =>{

      }
    )
  }

}
