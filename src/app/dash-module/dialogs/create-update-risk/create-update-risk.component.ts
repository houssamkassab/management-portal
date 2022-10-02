import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-risk',
  templateUrl: './create-update-risk.component.html',
  styleUrls: ['./create-update-risk.component.scss']
})
export class CreateUpdateRiskComponent implements OnInit {
  riskFG: FormGroup;

  riskData:any;


  constructor( public dialogRef: MatDialogRef<CreateUpdateRiskComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.riskData = data;
  }

  ngOnInit(): void {


    if(this.riskData){
      this.riskFG = this._fb.group({
        title: [this.riskData.title, Validators.required],
        description: [this.riskData.description, Validators.required],
        date: [this.riskData.date, Validators.required]
      });
    }
    else{
        this.riskFG = this._fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
          date: ['', Validators.required]
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.riskFG.getRawValue());
  }
}
