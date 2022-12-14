import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "home"},
  {path: "home", component: ViewComponent},
  {path: "contacto", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
