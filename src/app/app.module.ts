import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GraduacaoComponent } from './components/pages/graduacao/graduacao.component';
import { CienciaDaComputacaoComponent } from './components/pages/ciencia-da-computacao/ciencia-da-computacao.component';
import { PagDeAvisoComponent } from './components/pages/pag-de-aviso/pag-de-aviso.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { FormsComponent } from './forms/forms.component';
import { UserRootComponent } from './components/user-root/user-root.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { ADSComponent } from './components/pages/ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    GraduacaoComponent,
    CienciaDaComputacaoComponent,
    PagDeAvisoComponent,
    CadastroComponent,
    FormsComponent,
    UserRootComponent,
    CarrosselComponent,
    ADSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
