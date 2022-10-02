import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderService } from '../../../services/purchase-order.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateRequestComponent } from '../../dialogs/create-update-request/create-update-request.component';
import { CreateUpdateRequirementComponent } from '../../dialogs/create-update-requirement/create-update-requirement.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';

@Component({
  selector: 'app-purchase-request',
  templateUrl: './purchase-request.component.html',
  styleUrls: ['./purchase-request.component.scss']
})
export class PurchaseRequestComponent implements OnInit {
  colsOpions = {
    cols: [
      {
        header: 'product',
        key: 'product'
      },
      {
        header: 'short_description',
        key: 'short_description',
      },
      {
        header: 'amount',
        key: 'amount',
      },
      {
        header: 'status',
        key: 'status',
      } ,
      {
        header: 'department',
        key: 'department',
      } ,
      {
        header: 'actions',
        key: 'actions',
      }
    ],
  };
  purchaseData: any[]=[];

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

  constructor(private requestService: PurchaseOrderService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.purchaseData= this.requestService.getPurchaseData();
  }

  newRequest(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateRequestComponent , {
        width: '700px',
        height: '650px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          const newRow: any = {
            id: this.purchaseData.length + 1,
            ...result
          };

          this.purchaseData = [
            ...this.purchaseData,
            newRow
          ];

          this.tableData.data = this.purchaseData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }

  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editRequest(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteRequest(event);
    }
  }
  editRequest(item: any): void{
    let itemToUpdate = this.requestService.getPurchaseDataByID(item.id);

    const dialogRef = this.dialog.open(CreateUpdateRequestComponent, {
      width: '700px',
      height: '650px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result)
      {
      }
    });

  }

  deleteRequest(item: any): void{
    this.purchaseData = this.purchaseData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.purchaseData;
    this.tableData.ngAfterViewInit();

  }
}
