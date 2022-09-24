import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgetData = [{
    "id": 1,
    "project_name": "Stim",
    "image": "https://robohash.org/idprovidentet.jpg?size=50x50&set=set1",
    "tasks": 1,
    "members": [
      {
        "profile": "https://robohash.org/eaofficiisaspernatur.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/autemquaeratminima.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 1,
    "status": "0.8.7"
  }, {
    "id": 2,
    "project_name": "Fixflex",
    "image": "https://robohash.org/consequaturofficiaet.jpg?size=50x50&set=set1",
    "tasks": 2,
    "members": [
      {
        "profile": "https://robohash.org/remnamprovident.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/fugiatvoluptasminus.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/autpariaturid.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/suntidofficia.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/idquiaet.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/deseruntutab.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 2,
    "status": "3.05"
  }, {
    "id": 3,
    "project_name": "Lotlux",
    "image": "https://robohash.org/repellenduseligendidignissimos.jpg?size=50x50&set=set1",
    "tasks": 3,
    "members": [
      {
        "profile": "https://robohash.org/dictafugamaxime.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/sapientererumad.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 3,
    "status": "7.81"
  }, {
    "id": 4,
    "project_name": "Voyatouch",
    "image": "https://robohash.org/explicaboadipisciaut.jpg?size=50x50&set=set1",
    "tasks": 4,
    "members": [
      {
        "profile": "https://robohash.org/minimatemporibussapiente.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/adutbeatae.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/quodconsectetursed.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/repellatplaceatexpedita.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/asperioresquibusdamtempora.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 4,
    "status": "1.8"
  }, {
    "id": 5,
    "project_name": "Tin",
    "image": "https://robohash.org/cupiditateestamet.jpg?size=50x50&set=set1",
    "tasks": 5,
    "members": [
      {
        "profile": "https://robohash.org/quiquiunde.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/laboredeseruntsuscipit.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/reiciendissedrerum.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/nobisnemoporro.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/omnisquiaearum.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 5,
    "status": "8.6.8"
  }, {
    "id": 6,
    "project_name": "Andalax",
    "image": "https://robohash.org/ipsumdolorest.jpg?size=50x50&set=set1",
    "tasks": 6,
    "members": [
      {
        "profile": "https://robohash.org/adquiut.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/ainciduntfuga.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/voluptatuminventorefacilis.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 6,
    "status": "9.2.1"
  }, {
    "id": 7,
    "project_name": "Y-find",
    "image": "https://robohash.org/atetdicta.jpg?size=50x50&set=set1",
    "tasks": 7,
    "members": [
      {
        "profile": "https://robohash.org/solutasuntet.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/quissimiliquepossimus.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/undeasperioresfuga.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 7,
    "status": "8.9"
  }, {
    "id": 8,
    "project_name": "Quo Lux",
    "image": "https://robohash.org/totametnon.jpg?size=50x50&set=set1",
    "tasks": 8,
    "members": [
      {
        "profile": "https://robohash.org/maximeutalias.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/quiaminusillo.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/quoquisreprehenderit.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/animietfugit.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 8,
    "status": "0.39"
  }, {
    "id": 9,
    "project_name": "Alphazap",
    "image": "https://robohash.org/autliberout.jpg?size=50x50&set=set1",
    "tasks": 9,
    "members": [
      {
        "profile": "https://robohash.org/placeatdolorvoluptatem.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/nonvoluptatedeserunt.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 9,
    "status": "4.5"
  }, {
    "id": 10,
    "project_name": "Greenlam",
    "image": "https://robohash.org/odioquiasapiente.jpg?size=50x50&set=set1",
    "tasks": 10,
    "members": [
      {
        "profile": "https://robohash.org/doloresutalias.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/seditaquealias.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/laborumquaeitaque.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/ipsaconsecteturquae.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/sapientequosrem.jpg?size=50x50&set=set1"
      },
      {
        "profile": "https://robohash.org/architectominimarem.jpg?size=50x50&set=set1"
      }
    ],
    "progress": 10,
    "status": "0.72"
  }];

  constructor() {
  }

  getBudgetData(): any[] {
    return this.budgetData;
  }

  addNewBudget(data: any): void {
    data.project_name = data.pjName;
    this.budgetData.unshift(data);
    this.getBudgetData();
  }

  updateBudget(id: any, data: any): void {

    const lastIndex = this.budgetData.findIndex(
      (x) => x.id === id);

    data.image = this.budgetData[lastIndex].image;
    data.members = this.budgetData[lastIndex].members;
    if (lastIndex !== -1) {
      this.budgetData[lastIndex] = data;
    }

  }

  deleteBudget(id: any): any{
    this.budgetData = this.budgetData.filter(x=> x.id !== id);
    // this.getBudgetData();
    console.log(this.budgetData);
    return this.budgetData;
  }
}
