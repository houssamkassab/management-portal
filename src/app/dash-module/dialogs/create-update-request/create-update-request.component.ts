import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-request',
  templateUrl: './create-update-request.component.html',
  styleUrls: ['./create-update-request.component.scss']
})
export class CreateUpdateRequestComponent implements OnInit {
  requestFG: FormGroup;

  requestData:any;

  departments: any[] = [
    {id: 1, value: 'Application'},
    {id: 2, value: 'Service'},
    {id:  3, value: 'Infrastructor'}
  ];

  statusAvailable: any[] = [
    {id: 1, value: 'Ready'},
    {id: 2, value: 'Pending'}
  ];

  products: any[] = [
    {id: 1, value: 'Support 1'},
    {id: 2, value: 'Support 2'}
  ];
  constructor( public dialogRef: MatDialogRef<CreateUpdateRequestComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.requestData = data;
  }

  ngOnInit(): void {


    if(this.requestData){
      this.requestFG = this._fb.group({
        product: [this.requestData.product, Validators.required],
        short_description: [this.requestData.short_description, Validators.required],
        amount: [this.requestData.amount, Validators.required],
        status: [this.requestData.status, Validators.required],
        department: [this.requestData.department, Validators.required]
      });
    }
    else{
        this.requestFG = this._fb.group({
          product: ['', Validators.required],
          short_description: [ '', Validators.required],
          amount: ['', Validators.required],
          status: ['', Validators.required],
          department: ['', Validators.required]
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.requestFG.getRawValue());
  }
}
