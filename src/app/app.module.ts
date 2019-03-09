import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Views/profile/profile.component';
import { FormProfileComponent } from './dashboard/form-profile/form-profile.component';
import { FormUnidadesComponent } from './dashboard/form-unidades/form-unidades.component';
import { FormEquiposComponent } from './dashboard/form-equipos/form-equipos.component';
import { UnidadesComponent } from './Views/unidades/unidades.component';
import { EquiposComponent } from './Views/equipos/equipos.component';
import { RealUnidadesComponent } from './dashboard/RealTime/real-unidades/real-unidades.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { NotPageComponent } from './not-page/not-page.component';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io'
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { environment } from 'src/environments/environment.prod';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
const config : SocketIoConfig = {
  url: environment.wsURL, options:{

  }
}


const appRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dash',
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: '',
    redirectTo: "/login",
    pathMatch: "full"
  },

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

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    FormProfileComponent,
    FormUnidadesComponent,
    FormEquiposComponent,
    UnidadesComponent,
    EquiposComponent,
    RealUnidadesComponent,
    NotPageComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDBqsvI4AWS5n1ipMCbyq2CWsX6-xxrIg8'}),
    SocketIoModule.forRoot(config)
    
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
