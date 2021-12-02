import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpShellComponent} from "./components/http-shell/http-shell.component";

const routes: Routes = [
  { path: '', component: HttpShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaHttpRoutingModule { }
