import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { GraduacaoComponent } from './components/pages/graduacao/graduacao.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CienciaDaComputacaoComponent } from './components/pages/ciencia-da-computacao/ciencia-da-computacao.component';
import { PagDeAvisoComponent } from './components/pages/pag-de-aviso/pag-de-aviso.component';
import { FormsComponent } from './forms/forms.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { UserRootComponent } from './components/user-root/user-root.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},

  {path: 'cadastro', component: CadastroComponent},

  {path: 'graduacao', component: GraduacaoComponent},

  {path: 'home', component: HomeComponent},

  {path: 'ciencia-da-computacao', component: CienciaDaComputacaoComponent},

  {path: 'form', component: FormsComponent},

  {path: 'aviso', component: PagDeAvisoComponent},

  {path: 'user', component: UserRootComponent},

  /** Sempre devera ficar na ultima linha das rotas */
  {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
