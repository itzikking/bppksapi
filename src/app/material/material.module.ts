import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material'



const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];


@NgModule({
  declarations: [],
  imports: [MaterialComponents, CommonModule],
  exports: [MaterialComponents]
})
export class MaterialModule { }
