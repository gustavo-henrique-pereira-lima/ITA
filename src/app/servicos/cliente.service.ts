import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';     // Melhor da uma olhada no RXJS
import { Aluno } from './model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // url da api
  private url:string = 'http://localhost:8080';

  // contrutor - Será responsavel por fazer requisicoes da API
  constructor(private http:HttpClient) { }

  // Metodo para selecionar todos os clientes
  selecionar():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url);
  }

  // Método para cadastrar Clientes
  cadastrar(obj:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url, obj);
  }
}
