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
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    scrollbar: false,
    pagination:{
      el:'.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    spaceBetween: 5,
    autoplay:{
      delay: 5000
    }
    // navigation: {
    //   nextEl: '.swiper-arrow-next',
    //   prevEl: '.swiper-arrow-previous',
    // },
  };
  slides=[{

      lgImageUrl: 'https://www.educationdragon.com/wp-content/uploads/2021/04/starting-a-business-in-India-for-foreign-company.jpg',
     text:"It was city government's intention that developers should meet the total costs of major developments."
    },
    {
      lgImageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg',
      text:"Instead the developers have simply plonked in a custom mode, which allows you to practice a battle using your own parameters."
    },{
      lgImageUrl: 'https://iboss.vn/wp-content/uploads/2021/06/Business-Intelligence.jpg',
      text:"The developers made a concession, in quirks mode only, for honoring (misguided) requests to use Symbol font."
    },
  ];

  constructor(private fb: FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:[null, Validators.required],
      password:[null, Validators.required],
    });
    this.loginForm.reset();

  }

  login(): void {
    const credentials ={
      ...this.loginForm.getRawValue()
    };

    this.selectedMode = this.loginMode.verification;

  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
