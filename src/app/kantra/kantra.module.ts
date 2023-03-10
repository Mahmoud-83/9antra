import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KantraRoutingModule } from './kantra-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    KantraRoutingModule
  ]
})
export class KantraModule { }
