import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateIssueComponent } from '../../dialogs/create-update-issue/create-update-issue.component';
import { CreateUpdatePlanComponent } from '../../dialogs/create-update-plan/create-update-plan.component';
import * as _moment from 'moment';
import { CreateUpdateRequirementComponent } from '../../dialogs/create-update-requirement/create-update-requirement.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';

const moment = _moment;

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.scss']
})
export class RequirementListComponent implements OnInit, AfterViewInit {
  reqData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'select',
        key: 'select'
      },
      {
        header: 'category',
        key: 'category'
      },
      {
        header: 'name',
        key: 'name',
      },
      {
        header: 'short_description',
        key: 'short_description',
      },
      {
        header: 'last_comment',
        key: 'last_comment',
      },
      {
        header: 'date',
        key: 'date',
      },
      /*{
        header: 'resolution_date',
        key: 'resolution_date',
      },*/
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
              private _route: ActivatedRoute,
              private dialog: MatDialog,
              private _router: Router) { }

  ngOnInit(): void {
    this.reqData = this.pjService.getRequirementList().map((item: any)=>{
      item.date = moment(item.date).format('MM/d/yyyy');
      return item;
    });


  }

  ngAfterViewInit(): void{
  }

  newReq(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateRequirementComponent, {
        width: '700px',
        height: '600px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          result.date = moment(result.date).toISOString();
          result.resolution_date = moment(result.resolution_date).toISOString();

          const newRow: any = {
            id: this.reqData.length + 1,
            ...result
          };

          this.reqData = [
            ...this.reqData,
            newRow
          ];

          this.tableData.data = this.reqData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }


  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editReq(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteReq(event);
    }
  }

  editReq(item: any): void{
   let itemToUpdate = this.pjService.getRequirementById(item.id);
    itemToUpdate.date =moment(item.date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdateRequirementComponent, {
      width: '700px',
      height: '350px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {
        // itemToUpdate.task_name = item.task_name;
        // itemToUpdate.duration = item.duration;
        // itemToUpdate.start_date = moment(item.start_date).format('MM/d/yyyy');
        // itemToUpdate.finish_date = moment(item.finish_date).format('MM/d/yyyy');
        // itemToUpdate.weight = item.weight;
        // itemToUpdate.completed = item.completed;
        // itemToUpdate.comment = item.comment;
        // this.reqData = this.pjService.getPlanninList();
      }
    });

  }

  deleteReq(item: any): void{
    this.reqData = this.reqData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.reqData;
    this.tableData.ngAfterViewInit();

  }
}
