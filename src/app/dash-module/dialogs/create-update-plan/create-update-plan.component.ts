import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-plan',
  templateUrl: './create-update-plan.component.html',
  styleUrls: ['./create-update-plan.component.scss']
})
export class CreateUpdatePlanComponent implements OnInit {
  planFG: FormGroup;

  planData:any;


  constructor( public dialogRef: MatDialogRef<CreateUpdatePlanComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.planData = data;
  }

  ngOnInit(): void {


    if(this.planData){
      this.planFG = this._fb.group({
        task_name: [this.planData.task_name, Validators.required],
        duration: [this.planData.duration, Validators.required],
        finish_date: [this.planData.finish_date, Validators.required],
        start_date: [ this.planData.start_date, Validators.required],
        weight: [this.planData.weight, Validators.required],
        completed: [this.planData.completed, Validators.required],
        comment: [this.planData.comment, Validators.required]
      });
    }
    else{
        this.planFG = this._fb.group({
          task_name: ['', Validators.required],
          duration: ['', Validators.required],
          finish_date: ['', Validators.required],
          start_date: [ '', Validators.required],
          weight: ['', Validators.required],
          completed: ['', Validators.required],
          comment: ['', Validators.required]
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.planFG.getRawValue());
  }
}
