import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-create-update-project',
  templateUrl: './create-update-project.component.html',
  styleUrls: ['./create-update-project.component.scss']
})
export class CreateUpdateProjectComponent implements OnInit {
  projectFG: FormGroup;

  projectData:any;

  departments: any[] = [
    {id: 1, value: 'Application'},
    {id: 2, value: 'Infrastructure'},
    {id:  3, value: 'Services'}
  ];


  vendors: any[] = [
    {id: 1, value: 'Netways'},
    {id: 2, value: 'Nournet'},
    {id:  3, value: 'Evosys'}
  ];

  constructor( public dialogRef: MatDialogRef<CreateUpdateProjectComponent>,
              private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.projectData = data;
  }

  ngOnInit(): void {

    if(this.projectData){
      this.projectFG = this._fb.group({
        department: [this.projectData.department, Validators.required],
        description: [this.projectData.description, Validators.required],
        end_date: [this.projectData.end_date, Validators.required],
        start_date: [ this.projectData.start_date, Validators.required],
        title: [this.projectData.title, Validators.required],
        progress: [this.projectData.progress, Validators.required],
        owner: [this.projectData.owner, Validators.required],
        vendor: [this.projectData.vendor, Validators.required],
      });
    }
    else{
        this.projectFG = this._fb.group({
          department: ['', Validators.required],
          description: ['', Validators.required],
          end_date: ['', Validators.required],
          start_date: ['', Validators.required],
          title: ['', Validators.required],
          owner: ['', Validators.required],
          vendor: ['', Validators.required],
        });
    }
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close(this.projectFG.getRawValue());
  }
}
