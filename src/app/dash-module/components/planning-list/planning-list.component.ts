import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdatePlanComponent } from '../../dialogs/create-update-plan/create-update-plan.component';
import * as _moment from 'moment';
import { ListingTableComponent } from '../listing-table/listing-table.component';

const moment = _moment;

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit, AfterViewInit {
  planningData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'task_name',
        key: 'task_name'
      },
      {
        header: 'duration',
        key: 'duration',
      },
      {
        header: 'start_date',
        key: 'start_date',
      },
      {
        header: 'finish_date',
        key: 'finish_date',
      },
      {
        header: 'weight',
        key: 'weight',
      },{
        header: 'completed',
        key: 'progress',
      },{
        header: 'comment',
        key: 'comment',
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
    this.planningData = this.pjService.getPlanninList().map((item: any)=>{
      item.start_date = moment(item.start_date).format('MM/d/yyyy');
      item.finish_date = moment(item.finish_date).format('MM/d/yyyy');
      return item;
    });


  }

  ngAfterViewInit(): void{
  }

  newPlanning(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdatePlanComponent, {
        width: '700px',
        height: '600px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          result.start_date = moment(result.start_date).toISOString();
          result.finish_date = moment(result.finish_date).toISOString();

          const newRow: any = {
            id: this.planningData.length + 1,
            ...result
          };

          this.planningData = [
            ...this.planningData,
            newRow
          ];

          this.tableData.data = this.planningData;
          this.tableData.ngAfterViewInit();
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
      this.editPlanning(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deletePlanning(event);
    }
  }

  editPlanning(item: any): void{
   let itemToUpdate = this.pjService.getPlanningById(item.id);
    itemToUpdate.start_date =moment(item.start_date).toISOString();
    itemToUpdate.finish_date =moment( item.finish_date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdatePlanComponent, {
      width: '700px',
      height: '600px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {
        itemToUpdate.task_name = item.task_name;
        itemToUpdate.duration = item.duration;
        itemToUpdate.start_date = moment(item.start_date).format('MM/d/yyyy');
        itemToUpdate.finish_date = moment(item.finish_date).format('MM/d/yyyy');
        itemToUpdate.weight = item.weight;
        itemToUpdate.completed = item.completed;
        itemToUpdate.comment = item.comment;
        this.planningData = this.pjService.getPlanninList();
      }
    });

  }

  deletePlanning(item: any): void{
    this.planningData = this.planningData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.planningData;
    this.tableData.ngAfterViewInit();

  }
}
