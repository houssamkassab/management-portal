import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-order',
  templateUrl: './create-update-order.component.html',
  styleUrls: ['./create-update-order.component.scss']
})
export class CreateUpdateOrderComponent implements OnInit {
  orderFG: FormGroup;

  orderData: any;

  departments: any[] = [
    {id: 1, value: 'Application'},
    {id: 2, value: 'Service'},
    {id: 3, value: 'Infrastructor'}
  ];

  statusAvailable: any[] = [
    {id: 1, value: 'Ready'},
    {id: 2, value: 'Pending'}
  ];

  vendors: any[] = [
    {id: 1, value: 'Netways'},
    {id: 2, value: 'Nournet'}
  ];

  constructor(public dialogRef: MatDialogRef<CreateUpdateOrderComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.orderData = data;
  }

  ngOnInit(): void {

    if (this.orderData) {
      this.orderFG = this._fb.group({
        number: [this.orderData.number, Validators.required],
        year_code: [this.orderData.year_code, Validators.required],
        amount: [this.orderData.amount, Validators.required],
        status: [this.orderData.status, Validators.required],
        department: [this.orderData.department, Validators.required],
        title: [this.orderData.title, Validators.required],
        owner: [this.orderData.owner, Validators.required],
        vendor: [this.orderData.vendor, Validators.required],
      });
    }
    else {
      this.orderFG = this._fb.group({
        number: ['', Validators.required],
        year_code: ['', Validators.required],
        amount: ['', Validators.required],
        status: ['', Validators.required],
        department: ['', Validators.required],
        title: ['', Validators.required],
        owner: ['', Validators.required],
        vendor: ['', Validators.required],
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  save(): void {
    this.dialogRef.close(this.orderFG.getRawValue());
  }
}
