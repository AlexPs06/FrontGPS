import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  datos : any=[]
  exitsData = false;

  constructor(
    private api : ApiService,
    private websocket: WebsocketService,
    private router : Router
  ) { 
  }

  ngOnInit() {
    this.getequipos();

  }
  getequipos(){
    this.api.getEquipos().subscribe(
      response => {
        this.datos=response;
        let object_lenght = Object.keys(this.datos).length
        if(object_lenght >= 1){
          this.exitsData = true
        }
      }, error => {
        this.exitsData = false
      }
    )
  }
  editarEquipos(param: any){
    console.log(param.id)
    localStorage.setItem("action","editar")
    localStorage.setItem("idEquipo",param.id)
    localStorage.setItem("imei", param.Imei)
    localStorage.setItem("marca", param.Marca)
    localStorage.setItem("modelo", param.Modelo)
    localStorage.setItem("color", param.Color)

    this.router.navigateByUrl("/dashboard/equipos");
  }
  eliminarEquipos(param: any){
    console.log(param.id)
    this.api.deleteEquipos(param.id).subscribe(response =>{
    this.getequipos();

    })

  }
}
