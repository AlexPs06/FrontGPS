import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiService} from 'src/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  formLogin : FormGroup
  submit=false
  datas: any =[]
  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    public websocket: WebsocketService,
    private router: Router
    ) { 
      this.formLogin = this.formbuilder.group({
        username : ['', Validators.required],
        password : ['', Validators.required]
      })
     }

  ngOnInit() {
    //this.getLogin()
    if(localStorage.getItem('token')){
      this.router.navigateByUrl("/views/profile")
    }
  }

  getLogin(){
    localStorage.removeItem("token")
    this.api.login(this.formLogin.value).subscribe(
      response => {
        // console.log("entre")
        console.log(response)
        this.datas=response.token;
        localStorage.setItem("token",this.datas)
        console.log(localStorage.getItem('token'))
        this.router.navigateByUrl("/views/profile")
      }
    )
  }
  sendLogin(){
    this.submit=true;
    if(this.formLogin.invalid){
      return;
    }
    this.submit=false;

    console.log(this.formLogin.value.username+"--"+this.formLogin.value.password)
    this.getLogin();
  }
  ngOnDestroy(): void {
    
  }
  get f(){ return this.formLogin.controls}

}
