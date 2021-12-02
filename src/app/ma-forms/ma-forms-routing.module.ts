import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsShellComponent} from "./components/forms-shell/forms-shell.component";

const routes: Routes = [
  { path: '', component: FormsShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaFormsRoutingModule { }
