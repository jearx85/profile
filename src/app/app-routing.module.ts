import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path:'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
