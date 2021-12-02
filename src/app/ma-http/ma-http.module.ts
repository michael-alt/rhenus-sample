import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaHttpRoutingModule } from './ma-http-routing.module';
import { HttpShellComponent } from './components/http-shell/http-shell.component';


@NgModule({
  declarations: [
    HttpShellComponent
  ],
  imports: [
    CommonModule,
    MaHttpRoutingModule
  ]
})
export class MaHttpModule { }
