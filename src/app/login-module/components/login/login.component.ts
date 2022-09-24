import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginMode ={
    form: 'FORM',
    verification: 'VERIFICATION'
  };
  selectedMode = this.loginMode.form;
  showPassword: boolean = false;

  swiperConfig: SwiperConfigInterface={
    slidesPerView: 4,
    spaceBetween: 50,
    allowSlideNext: true,
    allowSlidePrev: true,
    // navigation: {
    //   nextEl: '.swiper-arrow-next',
    //   prevEl: '.swiper-arrow-previous',
    // },
  };

  constructor(private fb: FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required],
    });
  }

  login(): void {
    const credentials ={
      ...this.loginForm.getRawValue()
    };

    this.selectedMode = this.loginMode.verification;
    // this._router.navigate(['/home']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
