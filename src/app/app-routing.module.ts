import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'forms', loadChildren: () => import('./ma-forms/ma-forms.module').then(m => m.MaFormsModule )},
  { path: 'http', loadChildren: () => import('./ma-http/ma-http.module').then(m => m.MaHttpModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
