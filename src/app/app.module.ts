import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectosComponent,
    InformacionComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
