import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../services/purchase-order.service';

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

  constructor(private _orderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.orderData = this._orderService.getOrderData();

  }

}
