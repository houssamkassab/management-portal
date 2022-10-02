import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-requirement',
  templateUrl: './create-update-requirement.component.html',
  styleUrls: ['./create-update-requirement.component.scss']
})
export class CreateUpdateRequirementComponent implements OnInit {
  requirementFG: FormGroup;

  reqData:any;


  constructor( public dialogRef: MatDialogRef<CreateUpdateRequirementComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.reqData = data;
  }

  ngOnInit(): void {


    if(this.reqData){
      this.requirementFG = this._fb.group({
        last_comment: [this.reqData.last_comment, Validators.required]
      });
    }
    else{
        this.requirementFG = this._fb.group({
          category: ['', Validators.required],
          short_description: ['', Validators.required],
          date: ['', Validators.required],
          last_comment: [ '', Validators.required],
          name: ['', Validators.required]
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.requirementFG.getRawValue());
  }
}
