import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from '../../../services/operations.service';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateIssueComponent } from '../../dialogs/create-update-issue/create-update-issue.component';
import { CreateUpdateOperationComponent } from '../../dialogs/create-update-operation/create-update-operation.component';
import { CreateUpdateProjectComponent } from '../../dialogs/create-update-project/create-update-project.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-operation-management',
  templateUrl: './operation-management.component.html',
  styleUrls: ['./operation-management.component.scss']
})
export class OperationManagementComponent implements OnInit {
  operationsData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'title',
        key: 'title'
      },
      {
        header: 'type',
        key: 'type',
      },
      {
        header: 'estimated_start_date',
        key: 'estimated_start_date',
      },
      {
        header: 'estimated_end_date',
        key: 'estimated_end_date',
      },
      {
        header: 'completion',
        key: 'completion',
      },{
        header: 'comments',
        key: 'comments',
      },{
        header: 'Status',
        key: 'status',
      },
      {
        header: 'actual_start_date',
        key: 'actual_start_date',
      },
      {
        header: 'actual_end_date',
        key: 'actual_end_date',
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

  constructor(private pjService: PjManagementService,
              private _operationService: OperationsService,
              private _route: ActivatedRoute,
              private dialog: MatDialog,
              private _router: Router) { }

  ngOnInit(): void {
    this.operationsData = this._operationService.getOperatinsData().map((item: any)=>{
      item.estimated_start_date = moment(item.estimated_start_date).format('d/MM/yyyy');
      item.estimated_end_date = moment(item.estimated_end_date).format('d/MM/yyyy');
      item.actual_start_date = moment(item.actual_start_date).format('d/MM/yyyy');
      item.actual_end_date = moment(item.actual_end_date).format('d/MM/yyyy');

      return item;
    });
  }

  newOperation(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateOperationComponent, {
        width: '700px',
        height: '700px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        if(result)
        {
          const newRow: any = {
            id: this.operationsData.length + 1,
            ...result
          };

          console.log({newRow});
          this._operationService.operationsData.push(newRow);
          this.operationsData = this._operationService.getOperatinsData();
          console.log('operationsData=> ', this.operationsData);
          this.reloadComponent();
        }
      });
    }
  }

  reloadComponent() {
    let currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
  }

  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editOperation(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteOperation(event);
    }
  }

  editOperation(item: any): void{
    let itemToUpdate = this._operationService.getOperatinByID(item.id);
    // itemToUpdate.resolution_date =moment(item.resolution_date).toISOString();
    // itemToUpdate.date =moment( item.date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdateOperationComponent, {
      width: '700px',
      height: '700px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {
      }
    });

  }

  deleteOperation(item: any): void{
    this.operationsData = this.operationsData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.operationsData;
    this.tableData.ngAfterViewInit();

  }

}
