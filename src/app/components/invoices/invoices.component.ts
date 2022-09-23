import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoicesData: any[]=[];
  colsOpions = {
    cols: [
      {
        header: 'Name',
        key: 'name'
      },
      {
        header: 'Type',
        key: 'type',
      },
      {
        header: 'Example',
        key: 'example',
      },
      {
        header: 'Information',
        key: 'information',
      }
    ],
  };
  constructor(private orderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.invoicesData = this.orderService.getInvoicesData();
  }

}
