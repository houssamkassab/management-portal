import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  // budgetsData = [
  //   {
  //   "id": 1,
  //   "project_name": "Stim",
  //   "image": "https://robohash.org/idprovidentet.jpg?size=50x50&set=set1",
  //   "tasks": 1,
  //   "members": [
  //     {
  //       "profile": "https://robohash.org/eaofficiisaspernatur.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/autemquaeratminima.jpg?size=50x50&set=set1"
  //     }
  //   ],
  //   "progress": 100,
  //   "status": "Ready"
  // }, {
  //   "id": 2,
  //   "project_name": "Fixflex",
  //   "image": "https://robohash.org/consequaturofficiaet.jpg?size=50x50&set=set1",
  //   "tasks": 2,
  //   "members": [
  //     {
  //       "profile": "https://robohash.org/remnamprovident.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/fugiatvoluptasminus.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/autpariaturid.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/suntidofficia.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/idquiaet.jpg?size=50x50&set=set1"
  //     },
  //     {
  //       "profile": "https://robohash.org/deseruntutab.jpg?size=50x50&set=set1"
  //     }
  //   ],
  //   "progress": 28,
  //   "status": "In Progress"
  // }];
  budgetsData = [
    {
      id : 1,
      title: 'Budget of 2022',
      year: 2022,
      allocated_amount: 150000,
      code: 'BY2022'
    },
    {
      id : 2,
      title: 'Budget of 2023',
      year: 2023,
      allocated_amount: 180000,
      code: 'BY2023'
    },
  ];

  constructor() {
  }

  getBudgetData(): any[] {
    return this.budgetsData;
  }

  addNewBudget(data: any): void {
    // data.project_name = data.pjName;
    // this.budgetsData.unshift(data);
    // this.getBudgetData();
  }

  getBudgetById(id: any): any {
    return this.getBudgetData().find(x=> x.id === id);
  }

  updateBudget(id: any, data: any): void {

    // const lastIndex = this.budgetsData.findIndex(
    //   (x) => x.id === id);
    //
    // data.image = this.budgetsData[lastIndex].image;
    // data.members = this.budgetsData[lastIndex].members;
    // if (lastIndex !== -1) {
    //   this.budgetsData[lastIndex] = data;
    // }

  }

  deleteBudget(id: any): any{
    this.budgetsData = this.budgetsData.filter(x=> x.id !== id);
    // this.getBudgetData();
    console.log(this.budgetsData);
    return this.budgetsData;
  }
}
