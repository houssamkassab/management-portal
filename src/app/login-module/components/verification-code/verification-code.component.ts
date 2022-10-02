import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  verifyGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
    this.verifyGroup = this.fb.group({
      nbOne:[null, Validators.required],
      nbTwo:[null, Validators.required],
      nbThree:[null, Validators.required],
      nbFour:[null, Validators.required],
    });

  }
  confirm(): void{
    const fg = this.verifyGroup.getRawValue();
    const code = `${fg.nbOne}${fg.nbTwo}${fg.nbThree}${fg.nbFour}`;
    console.log({code});
    this._router.navigate(['/home']);
  }

}
