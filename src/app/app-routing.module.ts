import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },

  {
    path: 'Proyectos',
    component: ProyectosComponent
  },
  
  {
    path: 'Informacion',
    component: InformacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
