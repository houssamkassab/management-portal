import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NumberOnlyDirective } from '../directives/numberOnly';
import { MaterialModule } from '../material-module';
import { LoginComponent } from './components/login/login.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    NumberOnlyDirective,
    VerificationCodeComponent

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    SwiperModule
  ]
})
export class LoginModule { }
