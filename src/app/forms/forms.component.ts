import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  public cadastroForm: FormGroup = this.formBuilder.group({
    primeiroNome: [''],
      sobrenome: [''],
      numero: [''],
      sexo: [''],
      email: [''],
      senha: ['']
      
  })

  signUp(){
    this.http.post<any>("http://localhost:3000/usuarios", this.cadastroForm.value)
    .subscribe(_res=>{
      alert('Cadastro efetuado com sucesso!');
      this.cadastroForm.reset();
      this.router.navigate(['login']);
    },_err=>{
      alert('Acho que nao funcionou!')
    })
  }

}
