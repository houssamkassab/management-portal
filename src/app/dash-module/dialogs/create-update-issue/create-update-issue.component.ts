import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-issue',
  templateUrl: './create-update-issue.component.html',
  styleUrls: ['./create-update-issue.component.scss']
})
export class CreateUpdateIssueComponent implements OnInit {
  issueFG: FormGroup;

  issueData:any;

  resTeam: any[] = [
    {id: 1, value: 'Ali'},
    {id: 2, value: 'Mohamad'},
    {id:  3, value: 'Nour'}
  ];

  constructor( public dialogRef: MatDialogRef<CreateUpdateIssueComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.issueData = data;
  }

  ngOnInit(): void {


    if(this.issueData){
      this.issueFG = this._fb.group({
        title: [this.issueData.title, Validators.required],
        description: [this.issueData.description, Validators.required],
        date: [this.issueData.finish_date, Validators.required],
        solution: [ this.issueData.solution, Validators.required],
        responsible_team: [this.issueData.responsible_team, Validators.required],
        resolution_date: [this.issueData.resolution_date, Validators.required],
      });
    }
    else{
        this.issueFG = this._fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
          date: ['', Validators.required],
          solution: [ '', Validators.required],
          responsible_team: ['', Validators.required],
          resolution_date: ['', Validators.required],
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.issueFG.getRawValue());
  }
}
