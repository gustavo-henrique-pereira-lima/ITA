import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /* public loginForm!: FormGroup */
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  public loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    senha: ['']
  })

  login(){
    this.http.get<any>("http://localhost:3000/usuarios")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      });
        if(user){
          alert("Login efetuado com sucesso!");
          this.loginForm.reset();
          this.router.navigate(['home'])
        }else{
          alert("Usuario nao encontrado!")
        }
    },_err=>{
      alert("Something Wrong!")
    })
  }

}
