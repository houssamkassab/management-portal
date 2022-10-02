import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-dialog',
  templateUrl: './budget-dialog.component.html',
  styleUrls: ['./budget-dialog.component.scss']
})
export class BudgetDialogComponent implements OnInit {
  budgetDetails: any;
  budgetGP: FormGroup;

  constructor( public dialogRef: MatDialogRef<BudgetDialogComponent>,
               private _fb: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.budgetDetails= data;
  }

  ngOnInit(): void {
    if(this.budgetDetails && this.budgetDetails != null){
      this.iniForm();
    }
    else {
      this.budgetGP = this._fb.group({
        title: ['', Validators.required],
        year: [2022, Validators.required],
        allocated_amount: ['', Validators.required],
        code: ['', Validators.required],
      })
    }
  }

  iniForm(): void{
    this.budgetGP = this._fb.group({
      title: [this.budgetDetails?.title, Validators.required],
      year: [this.budgetDetails?.year, Validators.required],
      allocated_amount: [this.budgetDetails?.allocated_amount, Validators.required],
      code: [this.budgetDetails?.code, Validators.required]
    })
  }
  cancel(): void{
    this.dialogRef.close(null);
  }
  save(toDeletePj?: boolean): void{

    // if(toDeletePj)
    //   this.dialogRef.close(toDeletePj);
    //
    // else {
    //   const dataToSend = {
    //     ...this.budgetGP.getRawValue(),
    //     isNew: !(!!this.budgetDetails)
    //   };
    this.dialogRef.close(this.budgetGP.getRawValue());
    // }
  }

  deleteProject(): void{
    this.dialogRef.close({toDeletePj: true});
  }
}
