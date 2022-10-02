import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-operation',
  templateUrl: './create-update-operation.component.html',
  styleUrls: ['./create-update-operation.component.scss']
})
export class CreateUpdateOperationComponent implements OnInit {
  operationFG: FormGroup;

  operationData:any;

  types: any[] = [
    {id: 1, value: 'CyberSecurity'},
    {id: 2, value: 'Network'}
  ];


  statusAvailable: any[] = [
    {id: 1, value: 'Ready'},
    {id: 2, value: 'Pending'},
    {id:  3, value: 'Completed'}
  ];

  constructor( public dialogRef: MatDialogRef<CreateUpdateOperationComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.operationData = data;
  }

  ngOnInit(): void {

    if(this.operationData){
      this.operationFG = this._fb.group({
        title: [this.operationData.title, Validators.required],
        type: [this.operationData.type, Validators.required],
        estimated_end_date: [this.operationData.estimated_end_date, Validators.required],
        estimated_start_date: [ this.operationData.estimated_start_date, Validators.required],
        status: [this.operationData.status, Validators.required],
        completion: [this.operationData.completion, Validators.required],
        comments: [this.operationData.comments, Validators.required],
        actual_start_date: [ this.operationData.actual_start_date, Validators.required],
        actual_end_date: [ this.operationData.actual_end_date, Validators.required],
      });
    }
    else{
        this.operationFG = this._fb.group({
          title: ['', Validators.required],
          type: ['', Validators.required],
          estimated_end_date: ['', Validators.required],
          estimated_start_date: [ '', Validators.required],
          status: ['', Validators.required],
          completion: ['', Validators.required],
          comments: ['', Validators.required],
          actual_start_date: [ '', Validators.required],
          actual_end_date: [ '', Validators.required],
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.operationFG.getRawValue());
  }
}
