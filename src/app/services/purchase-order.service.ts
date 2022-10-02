import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  orderData =[{
    "id": 1,
    "number": "Support 1",
    "year_code": "description 1",
    "amount": 4000 ,
    "status": "Ready",
    "department": "Application",
    "title": "Support PO",
    "owner": "Youssef",
    "vendor": "Netways",
  }, {
    "id": 2,
    "number": "Support 2",
    "year_code": "description 2",
    "amount": 3500 ,
    "status": "Pending",
    "department": "Service",
    "title": "Support PO",
    "owner": "Ali",
    "vendor": "Nournet",
  }];

  purchaseData=[{
    "id": 1,
    "product": "Support 1",
    "short_description": "description 1",
    "amount": 95 ,
    "status": "Ready",
    "department": "Application",
  }, {
    "id": 2,
    "product": "Support 2",
    "short_description": "description 2",
    "amount": 78 ,
    "status": "Pending",
    "department": "Services",
  }];


  invoicesData=[{
    "id": 1,
    "number": "001",
    "reference": "Net-001",
    "amount": 78 ,
    "status": "Ready",
    "po_reference": "PO-App2",
    "date":'2022-10-05T14:48:00.000Z',
  }, {
    "id": 2,
    "number": "002",
    "reference": "Net-002",
    "amount": 105 ,
    "status": "Pending",
    "po_reference": "PO-R1",
    "date":'2022-10-05T14:48:00.000Z',
  }];


  constructor() {

  }

  getOrderData(): any{
    return this.orderData;
  }

  getPurchaseOrderByID(id: any): any{
    return this.orderData.find(x=> x.id === id);
  }
/////////
  getPurchaseData(): any{
    return this.purchaseData;
  }
  getPurchaseDataByID(id: any): any{
    return this.purchaseData.find(x=> x.id === id);
  }
///////
  getInvoicesData(): any{
    return this.invoicesData;
  }
  getPurchaseInvoiceByID(id: any): any{
    return this.invoicesData.find(x=> x.id === id);
  }

}
