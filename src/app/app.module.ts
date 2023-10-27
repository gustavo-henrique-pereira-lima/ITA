import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GraduacaoComponent } from './components/pages/graduacao/graduacao.component';
import { CienciaDaComputacaoComponent } from './components/pages/ciencia-da-computacao/ciencia-da-computacao.component';
import { PagDeAvisoComponent } from './components/pages/pag-de-aviso/pag-de-aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    GraduacaoComponent,
    CienciaDaComputacaoComponent,
    PagDeAvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
