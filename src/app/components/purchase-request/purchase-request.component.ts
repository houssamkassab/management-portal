import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-request',
  templateUrl: './purchase-request.component.html',
  styleUrls: ['./purchase-request.component.scss']
})
export class PurchaseRequestComponent implements OnInit {
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
  purchaseData: any[]=[];

  constructor(private requestService: PurchaseOrderService) { }

  ngOnInit(): void {

    this.purchaseData= this.requestService.getPurchaseData();
  }

}
