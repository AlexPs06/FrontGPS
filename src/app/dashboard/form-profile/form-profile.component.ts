import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css']
})
export class FormProfileComponent implements OnInit {

  formProfile : FormGroup
  submit=false
  datas =[]
  value = localStorage.getItem('action')

  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    private websocket: WebsocketService) {
      this.formProfile = this.formbuilder.group({
        User : ['', Validators.required],
        Address : ['', Validators.required],
        Phone : ['', Validators.required],
        Email : ['', Validators.required],
        Edad : ['', Validators.required],
      })
      
      
      if(this.value == "editar"){
        this.formProfile.get('User').setValue(localStorage.getItem("User"))
        this.formProfile.get('Address').setValue(localStorage.getItem("Address"))
        this.formProfile.get('Phone').setValue(localStorage.getItem("Phone"))
        this.formProfile.get('Email').setValue(localStorage.getItem("Email"))
        this.formProfile.get('Edad').setValue(localStorage.getItem("Edad"))
        localStorage.removeItem("id")
        localStorage.removeItem("Address")
        localStorage.removeItem("Phone")
        localStorage.removeItem("Email")
        localStorage.removeItem("Edad")
        localStorage.removeItem("action")
        
        console.log(this.formProfile.get('User').value)
      }

    }

  ngOnInit() {
  }
  addProfile(){
    console.log('Entre...............')
    this.submit=true;
    if(this.formProfile.invalid){
      return;
    }
    console.log('Procesando...............')
    this.submit=false;
    this.postProfile();
  }
  postProfile(){
    this.api.postProfile(this.formProfile.value).subscribe(
      response => {
        // console.log("entre")
        console.log(response)
        console.log("si se pudo")
      },error =>{
        console.log(error)
      }
    )
  }

  editarProfile(){
    
  }
}
