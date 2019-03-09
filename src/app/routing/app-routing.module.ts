import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormProfileComponent } from '../dashboard/form-profile/form-profile.component';
import { FormUnidadesComponent } from '../dashboard/form-unidades/form-unidades.component';
import { FormEquiposComponent } from '../dashboard/form-equipos/form-equipos.component';
import { ProfileComponent } from '../Views/profile/profile.component';
import { UnidadesComponent } from '../Views/unidades/unidades.component';
import { EquiposComponent } from '../Views/equipos/equipos.component';
import { RealUnidadesComponent } from '../dashboard/RealTime/real-unidades/real-unidades.component';
import { NotPageComponent } from '../not-page/not-page.component';

const routes: Routes= [
  {path: '' , component: LoginComponent},
  {
    path:'dashboard',
    children:[
      {path: 'profile', component: FormProfileComponent},
      {path: 'unidades', component: FormUnidadesComponent},
      {path: 'equipos', component: FormEquiposComponent},
    ]
  },
  {
    path:'views',
    children:[
      {path: 'profile', component: ProfileComponent},
      {path: 'unidades', component: UnidadesComponent},
      {path: 'equipos', component: EquiposComponent},
    ]
  }
  ,{
    path:'GPS',
    children:[
        {path: 'unidades', component: RealUnidadesComponent},
      
    ]
  },
  {path:'**', component: NotPageComponent},

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
