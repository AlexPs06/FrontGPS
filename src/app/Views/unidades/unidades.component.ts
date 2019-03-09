import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  datos : any=[]
  exitsData = true
  
  constructor(
    private api : ApiService,
    private websocket: WebsocketService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getUnidades();

  }
  getUnidades(){
    this.api.getUnidades().subscribe(
      response => {
        console.log(response)
        this.datos=response
      }
    )
  }
  editarUnidades(param: any){
    localStorage.setItem("unidad",param)
    localStorage.setItem('idUsuario', param.id)
    localStorage.setItem("Placa",param.Placa)
    localStorage.setItem("User",param.User)
    localStorage.setItem("Marca",param.Marca)
    localStorage.setItem("Modelo",param.Modelo)
    localStorage.setItem("Dispositivo",param.Dispositivo)
    localStorage.setItem("Imei",param.Imei)


    this.router.navigateByUrl("/dashboard/unidades").then(()=>{
      console.log(localStorage.getItem("unidad"))

    });
  }
  eliminarUnidades(param: any){
    console.log(param.id)
    this.api.deleteUnidades(param.id).subscribe(response =>{
    this.getUnidades();

    })

  }
}
