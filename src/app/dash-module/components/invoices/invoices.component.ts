import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderService } from '../../../services/purchase-order.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateInvoiceComponent } from '../../dialogs/create-update-invoice/create-update-invoice.component';
import { CreateUpdateOrderComponent } from '../../dialogs/create-update-order/create-update-order.component';
import { ListingTableComponent } from '../listing-table/listing-table.component';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoiceData: any[]=[];
  colsOpions = {
    cols: [
      {
        header: 'ID',
        key: 'id'
      },
      {
        header: 'number',
        key: 'number',
      },
      {
        header: 'reference',
        key: 'reference',
      },
      {
        header: 'po_reference',
        key: 'po_reference',
      },{
        header: 'Amount',
        key: 'amount',
      },
      {
        header: 'date',
        key: 'date',
      },{
        header: 'Status',
        key: 'status',
      },{
        header: 'Actions',
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

  constructor(private orderService: PurchaseOrderService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.invoiceData = this.orderService.getInvoicesData().map((item:any)=>{
      item.date = moment(item.date).format('MM/d/yyyy');
      return item;
    });
  }


  newInvoice(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateInvoiceComponent , {
        width: '700px',
        height: '450px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result) => {
        if(result)
        {
          const newRow: any = {
            id: this.invoiceData.length + 1,
            ...result
          };

          this.invoiceData = [
            ...this.invoiceData,
            newRow
          ];

          this.tableData.data = this.invoiceData;
          this.tableData.ngAfterViewInit();
        }
      });
    }
  }

  handleAction(event: any): void{
    if(event.actionName === this.actionEvents.EDIT){
      this.editInvoice(event);
    }
    else if(event.actionName === this.actionEvents.DELETE){
      this.deleteInvoice(event);
    }
  }
  editInvoice(item: any): void{
    let itemToUpdate = this.orderService.getPurchaseInvoiceByID(item.id);
    itemToUpdate.date = moment(itemToUpdate.date).toISOString();

    const dialogRef = this.dialog.open(CreateUpdateInvoiceComponent, {
      width: '700px',
      height: '450px',
      data: itemToUpdate
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result)
      {
      }
    });

  }

  deleteInvoice(item: any): void{
    this.invoiceData = this.invoiceData.filter((x)=> x.id !== item.id);
    this.tableData.data = this.invoiceData;
    this.tableData.ngAfterViewInit();

  }

}
