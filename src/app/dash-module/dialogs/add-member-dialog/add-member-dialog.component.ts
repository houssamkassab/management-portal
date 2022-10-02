import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  fullName: any;
  role: any;
  selectedRole: any;
  isInternal: boolean;

  roles: any[] = [
    {id: 1, value: 'Project Manager'},
    {id: 2, value: 'BA'},
    {id:  3, value: 'QA'},
    {id:  4, value: 'Project Owner'},
  ];

  constructor( public dialogRef: MatDialogRef<AddMemberDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.isInternal = data;
  }

  ngOnInit(): void {
  this.selectedRole = this.roles[0].value;
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close({
        fullName: this.fullName,
        role: this.selectedRole,
      });
  }
}
