import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import {NgxPaginationModule} from 'ngx-pagination';

const NgxBootstrapComponents = [
  NgxBootstrapIconsModule.pick(allIcons),
  NgxNavbarModule,
  ShowHidePasswordModule,
  NgxSpinnerModule,
  AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
  NgxBootstrapConfirmModule,
  NgxPaginationModule
];

@NgModule({
  imports: [NgxBootstrapComponents],
  exports: [NgxBootstrapComponents]
})
export class NgxbootstrapModule { }
