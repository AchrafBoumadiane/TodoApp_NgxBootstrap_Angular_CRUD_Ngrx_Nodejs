import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { NgxbootstrapModule } from 'src/app/ngxbootstrap/ngxbootstrap.module';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    NgxbootstrapModule
  ]
})
export class NotFoundModule { }
