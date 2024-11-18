import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseURL = 'https://localhost:44361/api'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/Clientes`)
  }

  getById(clienteId: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/Clientes/${clienteId}`)
  }

  save(clienteModel: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/Clientes`, clienteModel)
  }

  update(clienteModel: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/Clientes/${clienteModel.id}`, clienteModel)
  }

  delete(clienteId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/Clientes/${clienteId}`)
  }

}
