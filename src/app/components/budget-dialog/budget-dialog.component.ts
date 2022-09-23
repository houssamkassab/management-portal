import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-dialog',
  templateUrl: './budget-dialog.component.html',
  styleUrls: ['./budget-dialog.component.scss']
})
export class BudgetDialogComponent implements OnInit {
  projectDetails: any;
  pjGroup: FormGroup;

  constructor( public dialogRef: MatDialogRef<BudgetDialogComponent>,
               private _fb: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.projectDetails= data;
  }

  ngOnInit(): void {
    if(this.projectDetails && this.projectDetails != null){
      this.iniForm();
    }
    else {
      this.pjGroup = this._fb.group({
        pjName: ['', Validators.required],
        tasks: [0, Validators.required],
        members: ['', Validators.required],
        progress: [20, Validators.required],
        status: ['', Validators.required],
      })
    }
  }

  iniForm(): void{
    this.pjGroup = this._fb.group({
      pjName: [this.projectDetails?.project_name, Validators.required],
      tasks: [this.projectDetails?.tasks, Validators.required],
      members: [this.projectDetails?.members?.length, Validators.required],
      progress: [this.projectDetails?.progress, Validators.required],
      status: [this.projectDetails?.status, Validators.required],
    })
  }
  cancel(): void{
    this.dialogRef.close(null);
  }
  save(toDeletePj?: boolean): void{

    if(toDeletePj)
      this.dialogRef.close(toDeletePj);

    else {
      const dataToSend = {
        ...this.pjGroup.getRawValue(),
        isNew: !(!!this.projectDetails)
      };
    this.dialogRef.close(dataToSend);
    }
  }

  deleteProject(): void{
    this.dialogRef.close({toDeletePj: true});
  }
}
