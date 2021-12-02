import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaFormsRoutingModule } from './ma-forms-routing.module';
import { FormsShellComponent } from './components/forms-shell/forms-shell.component';


@NgModule({
  declarations: [
    FormsShellComponent
  ],
  imports: [
    CommonModule,
    MaFormsRoutingModule
  ]
})
export class MaFormsModule { }
