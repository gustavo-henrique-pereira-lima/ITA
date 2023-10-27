import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { GraduacaoComponent } from './components/pages/graduacao/graduacao.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CienciaDaComputacaoComponent } from './components/pages/ciencia-da-computacao/ciencia-da-computacao.component';
import { PagDeAvisoComponent } from './components/pages/pag-de-aviso/pag-de-aviso.component';

const routes: Routes = [
  
  {path: '**', redirectTo: 'login'},

  {path: 'login', component: LoginComponent},

  {path: 'graduacao', component: GraduacaoComponent},

  {path: 'home', component: HomeComponent},

  {path: 'ciencia-da-computacao', component: CienciaDaComputacaoComponent},

  {path: 'aviso', component: PagDeAvisoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
