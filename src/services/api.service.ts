import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API, API_P } from 'src/app/app-config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'applications/json',
    'Autorization': 'Token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = API_P

  constructor(private http: HttpClient) { }

  login(params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(`${this.api}login/`, params, httpOptions)
  }
 
  editUnidades(params: any, id): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }

    return this.http.put(`${this.api}unidades/${id}`, params, httpOptions)
  }

  editDevice(params: any, id): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }

    return this.http.put(`${this.api}registro/${id}`, params, httpOptions)
  }

  postEquipos(params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.post(`${this.api}registro/`, params, httpOptions)
  }
  postProfile(params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.post(`${this.api}profile/`, params, httpOptions)
  }
  postUnidades(params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.post(`${this.api}unidades/`, params, httpOptions)
  }
  postGPS(params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.post(`${this.api}unidades/`, params, httpOptions)
  }
  getEquipos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.api}registro/`, httpOptions)
  }
  getProfile(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.api}profile/`, httpOptions)
  }
  getUnidades(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.api}unidades/`, httpOptions)
  }
  getGPS(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.api}unidades/`, httpOptions)
  }





  deleteEquipos(id : any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.delete(`${this.api}registro/${id}`, httpOptions)
  }
  deleteProfile(id : any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.delete(`${this.api}profile/${id}`, httpOptions)
  }
  deleteUnidades(id : any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    return this.http.delete(`${this.api}unidades/${id}`, httpOptions)
  }
  deleteGPS(id : any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token '+localStorage.getItem('token')
      })
    }
    
    return this.http.delete(`${this.api}unidades/${id}`, httpOptions)
  }





}
