import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operationsData =[{
    "id": 1,
    "title": "VA Assessment",
    "type": "CyberSecurity",
    "estimated_start_date":'2022-10-05T14:48:00.000Z',
    "estimated_end_date": '2023-10-05T14:48:00.000Z',
    "completion": 92,
    "comments": "Comment 1",
    "status": "Ready",
    "actual_start_date": '2022-10-05T14:48:00.000Z',
    "actual_end_date": '2023-10-05T14:48:00.000Z',
  }, {
    "id":2,
    "title": "VA Activity",
    "type": "Security",
    "estimated_start_date":'2022-10-05T14:48:00.000Z',
    "estimated_end_date": '2023-10-05T14:48:00.000Z',
    "completion": 92,
    "comments": "Comment 1",
    "status": "Pending",
    "actual_start_date": '2022-10-05T14:48:00.000Z',
    "actual_end_date": '2023-10-05T14:48:00.000Z',
  }];

  constructor() { }

  getOperatinsData(): any{
    return this.operationsData;
  }

  getOperatinByID(id: any): any{
    return this.operationsData.find(x=> x.id === id);
  }
}
