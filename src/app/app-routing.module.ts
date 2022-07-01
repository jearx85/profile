import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {CvComponent} from './components/cv/cv.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path:'proyectos', component: ProyectosComponent},
  { path:'cv', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
