import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-attachment-dialog',
  templateUrl: './add-attachment-dialog.component.html',
  styleUrls: ['./add-attachment-dialog.component.scss']
})
export class AddAttachmentDialogComponent implements OnInit {
  name: any;
  size: number;
  selectedValue: any;
  fileResult: any;

  categories: any[] = [
    {id: 1, value: 'BRD'},
    {id: 2, value: 'RFP'},
    {id:  3, value: 'Plan'},
    {id:  4, value: 'Other'},
  ];

  constructor( public dialogRef: MatDialogRef<AddAttachmentDialogComponent>) {
  }

  ngOnInit(): void {
  this.selectedValue = this.categories[0].value;
  }

  cancel(): void{
    this.dialogRef.close(null);
  }
  save(): void{
      this.dialogRef.close({
        name: this.name,
        size: this.size,
        category: this.selectedValue,
      });
  }

  chooseFile(event: any): void{

    const files: any = (event.target as HTMLInputElement).files;
    const fileInfo = files[0];


        const reader = new FileReader();
        reader.readAsDataURL(fileInfo);
        reader.onload = (_event) => {
          this.fileResult = reader.result;
          this.name = fileInfo.name;
          this.size= Math.floor(fileInfo.size / 1000);
        };

  }
}
