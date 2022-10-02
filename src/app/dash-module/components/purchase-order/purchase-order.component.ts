import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderService } from '../../../services/purchase-order.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateOrderComponent } from '../../dialogs/create-update-order/create-update-order.component';
import { CreateUpdateRequestComponent } from '../../dialogs/create-update-request/create-update-request.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  orderData: any[]=[];
  colsOpions = {
    cols: [
      {
        header: 'number',
        key: 'number'
      },
      {
        header: 'year_code',
        key: 'year_code',
      },
      {
        header: 'amount',
        key: 'amount',
      },
      {
        header: 'status',
        key: 'status',
      },{
        header: 'department',
        key: 'department',
      },{
        header: 'title',
        key: 'title',
      },{
        header: 'owner',
        key: 'owner',
      },{
        header: 'vendor',
        key: 'vendor',
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

  constructor(private _orderService: PurchaseOrderService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderData = this._orderService.getOrderData();

  }


  newOrder(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateOrderComponent , {
        width: '700px',
        height: '550px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          const newRow: any = {
            id: this.orderData.length + 1,
            ...result
          };

          this.orderData = [
            ...this.orderData,
            newRow
          ];

          this.tableData.data = this.orderData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }

  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editOrder(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteOrder(event);
    }
  }
  editOrder(item: any): void{
    let itemToUpdate = this._orderService.getPurchaseOrderByID(item.id);

    const dialogRef = this.dialog.open(CreateUpdateOrderComponent, {
      width: '700px',
      height: '550px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result)
      {
      }
    });

  }

  deleteOrder(item: any): void{
    this.orderData = this.orderData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.orderData;
    this.tableData.ngAfterViewInit();

  }
}
