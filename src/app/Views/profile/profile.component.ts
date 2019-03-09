import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  datos : any=[]
  exitsData = false;

  constructor(
    private api : ApiService,
    private websocket: WebsocketService,
    private router: Router
    
  ) { 
  }

  ngOnInit() {
    this.getProfile();

  }
  getProfile(){
    this.api.getProfile().subscribe(
      response => {
        console.log(response)
        this.datos=response;
        let object_lenght = Object.keys(this.datos).length
        if(object_lenght >= 1){
          this.exitsData = true
        }
      }, error=>{
        this.exitsData = false;
      }
    )
  }
  editarProfile(param: any){
    console.log(param.id)
    localStorage.setItem("action","editar")
    localStorage.setItem("id", param.id)
    localStorage.setItem("Address", param.Address)
    localStorage.setItem("Phone", param.Phone)
    localStorage.setItem("Email", param.Phone)
    localStorage.setItem("Edad", param.Edad)
    localStorage.setItem("User", param.User)
    this.router.navigateByUrl("/dashboard/profile");
  }
  eliminarProfile(param: any){
    console.log(param.id)
    this.api.deleteProfile(param.id).subscribe(response =>{
    this.getProfile();
    this.router.navigateByUrl("/view/profile");

    })


  }
}
