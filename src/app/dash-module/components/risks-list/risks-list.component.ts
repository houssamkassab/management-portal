import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdatePlanComponent } from '../../dialogs/create-update-plan/create-update-plan.component';
import * as _moment from 'moment';
import { CreateUpdateRiskComponent } from '../../dialogs/create-update-risk/create-update-risk.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';

const moment = _moment;

@Component({
  selector: 'app-risks-list',
  templateUrl: './risks-list.component.html',
  styleUrls: ['./risks-list.component.scss']
})
export class RisksListComponent implements OnInit, AfterViewInit {
  risksData: any[]=[];

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
    this.risksData = this.pjService.getRisksList().map((item: any)=>{
      item.date = moment(item.date).format('MM/d/yyyy');
      return item;
    });

  }

  ngAfterViewInit(): void{
  }

  newRisk(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateRiskComponent, {
        width: '700px',
        height: '550px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          result.start_date = moment(result.start_date).toISOString();
          result.finish_date = moment(result.finish_date).toISOString();

          const newRow: any = {
            id: this.risksData.length + 1,
            ...result
          };

          this.risksData = [
            ...this.risksData,
            newRow
          ];

          this.tableData.data = this.risksData;
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
      this.editRisk(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deletePlanning(event);
    }
  }

  editRisk(item: any): void{
   let itemToUpdate = this.pjService.getRiskById(item.id);
    itemToUpdate.date =moment(item.date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdateRiskComponent, {
      width: '700px',
      height: '600px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {
        itemToUpdate.title = item.title;
        itemToUpdate.description = item.description;
        itemToUpdate.date = moment(item.date).format('MM/d/yyyy');

        // this.risksData = this.pjService.getRisksList();
        this.tableData.data = this.risksData;
        this.tableData.ngAfterViewInit();
      }
    });

  }

  deletePlanning(item: any): void{
    this.risksData = this.risksData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.risksData;
    this.tableData.ngAfterViewInit();

  }
}
