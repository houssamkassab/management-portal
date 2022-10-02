import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BudgetService } from '../../../services/budget.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateIssueComponent } from '../../dialogs/create-update-issue/create-update-issue.component';
import { BudgetDialogComponent } from '../budget-dialog/budget-dialog.component';
import * as _moment from 'moment';
import { ListingTableComponent } from '../listing-table/listing-table.component';

const moment = _moment;

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  budgetsData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'title',
        key: 'title'
      },
      {
        header: 'year',
        key: 'year',
      },
      {
        header: 'allocated_amount',
        key: 'allocated_amount',
      },
      {
        header: 'code',
        key: 'code',
      },
      {
        header: 'actions',
        key: 'actions',
      }
    ],
  };

  actionEvents = ActionEvents;

  menuActions= [
    {
      name: 'Edit',
      event: this.actionEvents.EDIT
    },
    {
      name: 'Print',
      event: this.actionEvents.PRINT
    }
    ,{
      name: 'Delete',
      event: this.actionEvents.DELETE
    }
  ];
  @ViewChild(ListingTableComponent) tableData: ListingTableComponent;


  constructor(private budgetService: BudgetService,
              private _liveAnnouncer: LiveAnnouncer,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.budgetsData = this.budgetService.getBudgetData();
  }

  newBudget(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(BudgetDialogComponent, {
        width: '700px',
        height: '500px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {

          const newRow: any = {
            id: this.budgetsData.length + 1,
            ...result
          };

          this.budgetsData = [
            ...this.budgetsData,
            newRow
          ];

          this.tableData.data = this.budgetsData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }


  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editBudget(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteBudget(event);
    }
  }

  editBudget(item: any): void{
    let itemToUpdate = this.budgetService.getBudgetById(item.id);

    const dialogRef = this.dialog.open(BudgetDialogComponent, {
      width: '700px',
      height: '500px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {

      }
    });

  }

  deleteBudget(item: any): void{
    this.budgetsData = this.budgetsData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.budgetsData;
    this.tableData.ngAfterViewInit();

  }
}
