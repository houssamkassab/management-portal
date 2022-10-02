import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-invoice',
  templateUrl: './create-update-invoice.component.html',
  styleUrls: ['./create-update-invoice.component.scss']
})
export class CreateUpdateInvoiceComponent implements OnInit {
  invoiceFG: FormGroup;

  invoiceData: any;

  departments: any[] = [
    {id: 1, value: 'Application'},
    {id: 2, value: 'Service'},
    {id: 3, value: 'Infrastructor'}
  ];

  statusAvailable: any[] = [
    {id: 1, value: 'Ready'},
    {id: 2, value: 'Pending'}
  ];

  poReferences: any[] = [
    {id: 1, value: 'PO-R1'},
    {id: 2, value: 'PO-App2'}
  ];

  constructor(public dialogRef: MatDialogRef<CreateUpdateInvoiceComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.invoiceData = data;
  }

  ngOnInit(): void {

    if (this.invoiceData) {
      this.invoiceFG = this._fb.group({
        number: [this.invoiceData.number, Validators.required],
        reference: [this.invoiceData.reference, Validators.required],
        po_reference: [this.invoiceData.po_reference, Validators.required],
        status: [this.invoiceData.status, Validators.required],
        amount: [this.invoiceData.amount, Validators.required],
        date: [this.invoiceData.date, Validators.required],
      });
    }
    else {
      this.invoiceFG = this._fb.group({
        number: ['', Validators.required],
        reference: ['', Validators.required],
        amount: ['', Validators.required],
        status: ['', Validators.required],
        po_reference: ['', Validators.required],
        date: ['', Validators.required],
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  save(): void {
    this.dialogRef.close(this.invoiceFG.getRawValue());
  }
}
