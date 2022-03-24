import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ListagemComponent } from './component/listagem/listagem.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'formulario' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
