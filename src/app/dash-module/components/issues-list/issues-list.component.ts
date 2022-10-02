import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateIssueComponent } from '../../dialogs/create-update-issue/create-update-issue.component';
import { CreateUpdatePlanComponent } from '../../dialogs/create-update-plan/create-update-plan.component';
import * as _moment from 'moment';
import { ListingTableComponent } from '../listing-table/listing-table.component';

const moment = _moment;

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit, AfterViewInit {
  issuesData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'title',
        key: 'title'
      },
      {
        header: 'description',
        key: 'description',
      },
      {
        header: 'date',
        key: 'date',
      },
      {
        header: 'solution',
        key: 'solution',
      },
      {
        header: 'responsible_team',
        key: 'responsible_team',
      },{
        header: 'resolution_date',
        key: 'resolution_date',
      },{
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
    this.issuesData = this.pjService.getIssuesList().map((item: any)=>{
      item.date = moment(item.date).format('MM/d/yyyy');
      item.resolution_date = moment(item.resolution_date).format('MM/d/yyyy');
      return item;
    });


  }

  ngAfterViewInit(): void{
  }

  newIssue(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateIssueComponent, {
        width: '700px',
        height: '700px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          result.date = moment(result.date).toISOString();
          result.resolution_date = moment(result.resolution_date).toISOString();

          const newRow: any = {
            id: this.issuesData.length + 1,
            ...result
          };

          this.issuesData = [
            ...this.issuesData,
            newRow
          ];

          this.tableData.data = this.issuesData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }


  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editIssue(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteIssue(event);
    }
  }

  editIssue(item: any): void{
   let itemToUpdate = this.pjService.getIssueById(item.id);
    itemToUpdate.resolution_date =moment(item.resolution_date).toISOString();
    itemToUpdate.date =moment( item.date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdateIssueComponent, {
      width: '700px',
      height: '700px',
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
        // this.issuesData = this.pjService.getPlanninList();
      }
    });

  }

  deleteIssue(item: any): void{
    this.issuesData = this.issuesData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.issuesData;
    this.tableData.ngAfterViewInit();

  }
}
