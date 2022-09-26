import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarModule } from 'ngx-avatar';
import {MatTableModule} from '@angular/material/table';


const material = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  FlexLayoutModule,
  MatIconModule,
  MatExpansionModule,
  MatMenuModule,
  AvatarModule,
  HttpClientModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  exports: [
    ...material
  ]
})
export class MaterialModule {
}
