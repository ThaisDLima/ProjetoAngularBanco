
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { FormularioComponent } from './components/template/formulario/formulario.component'
import { AjudaComponent } from './components/template/ajuda/ajuda.component'


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "formulario",
    component: FormularioComponent
  },

  {
    path: "ajuda",
    component: AjudaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
