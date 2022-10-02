import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PjManagementService {
  projectsData=[{
    "id": 1,
    "code":"App-001",
    "department": "Application",
    "image":"https://149360961.v2.pressablecdn.com/wp-content/uploads/2020/09/small-business-web-development.png",
    "title": "Nawafth UI",
    "start_date": '2022-10-05T14:48:00.000Z',
    "end_date": "2024-10-05T12:48:00.000Z",
    "owner": 'Abdullah Al Hamam',
    "description":"Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities the members will undertake.",
    "vendor": "Netways",
    "status": "In Progress",
    "progress": 50,
    "duration": "50 days",
    "phase": "initiation",
    "comments": [
      {
        userName:"Mohamad Ismail",
        date:'12/03/2022',
        imageUrl:'https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png',
        comment: 'Very good project'
      },
      {
        userName:"Ali Bader",
        date:'05/08/2022',
        imageUrl: 'https://w1.pngwing.com/pngs/751/223/png-transparent-digital-marketing-icon-web-design-web-development-frontend-web-development-search-engine-optimization-user-interface-design-web-application-wordpress-thumbnail.png',
        comment: 'This project is helpful'
      }
    ],
    "attachments":[
      {
        name: 'Mockup.png',
        size: '7Mb',
        icon: 'photo'
      },
      {
        name: 'Guidline.pdf',
        size: '3Mb',
        icon: 'picture_as_pdf'
      }
    ],
    internalTeam: [
      {
        userName:"Youssef El Turk",
        role:'Project Manager',
        imageUrl:'https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png',
      },
      {
        userName:"Abdullah Al Hamam",
        role:'Manager',
        imageUrl:'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg',
      },
    ],
    externalTeam: [
      {
        userName:"Ali Bader",
        role:'Project Manager',
        imageUrl:'https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png',
      },
      {
        userName:"Mohamad Ismail",
        role:'Manager',
        imageUrl:'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg',
      },
    ]
  },{
    "id": 2,
    "code":"App-002",
    "department": "Services",
    "image":"https://9to5mac.com/wp-content/uploads/sites/6/2021/08/app-store-events-ipados-15.jpg?quality=82&strip=all",
    "title": "Youssef SP",
    "start_date": '2022-10-05T14:48:00.000Z',
    "end_date": '2023-10-05T14:48:00.000Z',
    "owner": 'Ali Hamam',
    "description":"Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities the members will undertake.",
    "vendor": "Nournet",
    "status": "Ready",
    "progress": 100,
    "duration": "85 days",
    "phase": "initiation",
    "comments": [
      {
        userName:"Mohamad Ismail",
        date:'12/03/2022',
        imageUrl:'https://cdn.vectorstock.com/i/1000x1000/49/03/software-developer-vector-12104903.webp',
        comment: 'Very good project'
      },
      {
        userName:"Ali Bader",
        date:'05/08/2022',
        imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/49/03/software-developer-vector-12104903.jpg',
        comment: 'This project is helpful'
      }
    ],
    "attachments":[
      {
        name: 'Mockup.png',
        size: '7Mb',
        icon: 'photo'
      },
      {
        name: 'Guidline.pdf',
        size: '3Mb',
        icon: 'picture_as_pdf'
      }
    ],
    internalTeam: [
      {
        userName:"Youssef El Turk",
        role:'Project Manager',
        imageUrl:'https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png',
      },
      {
        userName:"Abdullah Al Hamam",
        role:'Manager',
        imageUrl:'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg',
      },
    ],
    externalTeam: [
      {
        userName:"Ali Bader",
        role:'Project Manager',
        imageUrl:'https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png',
      },
      {
        userName:"Mohamad Ismail",
        role:'Manager',
        imageUrl:'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg',
      },
    ]
  }];

  planningList: any[] =[
    {
      "id": 1,
      "task_name":"Task 1",
      "duration": "25 days",
      "start_date": '2022-10-05T14:48:00.000Z',
      "finish_date": '2023-10-05T14:48:00.000Z',
      "weight": 110,
      "completed": 85,
      "comment":  'Very good project'
    },
    {
      "id": 2,
      "task_name":"Task 2",
      "duration": "30 days",
      "start_date": '2022-10-05T14:48:00.000Z',
      "finish_date": '2023-10-05T14:48:00.000Z',
      "weight": 75,
      "completed": 48,
      "comment":  'Helpful'
    }
  ];

  risksList: any[] =[
    {
      "id": 1,
      "title":"Risk 1",
      "description": "25 days",
      "date": '2022-10-05T14:48:00.000Z'
    },
    {
      "id": 2,
      "title":"Risk 2",
      "description": "45 days",
      "date": '2022-04-12T14:48:00.000Z'
    }
  ];

  issuesList: any[] =[
    {
      "id": 1,
      "title":"Issue 1",
      "description": "25 days",
      "date": '2022-10-05T14:48:00.000Z',
      "solution":"solution 1",
      "resolution_date":"2023-02-14T14:48:00.000Z",
      "responsible_team":"Nour",
    },
    {
      "id": 2,
      "title":"Issue 2",
      "description": "45 days",
      "date": '2022-04-12T14:48:00.000Z',
      "solution":"solution 2",
      "resolution_date":"2023-05-18T14:48:00.000Z",
      "responsible_team":"Ali",
    }
  ];

  requirementList: any[] =[
    {
      "id": 1,
      "category":"Category 1",
      "name":"Req 1",
      "short_description": "description for req 1",
      "date": '2022-10-05T14:48:00.000Z',
      "last_comment":"comment 1",
    },
    {
      "id": 2,
      "category":"Category 1",
      "name":"Req 2",
      "short_description": "description for req 2",
      "date": '2023-10-05T14:48:00.000Z',
      "last_comment":"comment 2",
    },
  ];

  constructor() { }

  getProjectsData(): any{
    return this.projectsData;
  }

  getProjectById(id: any): any{
    return this.projectsData.find(x=>x.id === id);
  }

  getPlanninList(): any{
    return this.planningList;
  }

  getPlanningById(id: any): any{
    return this.planningList.find(x=>x.id === id);
  }

  getRisksList(): any{
    return this.risksList;
  }

  getRiskById(id: any): any{
    return this.risksList.find(x=>x.id === id);
  }

  // ...........
  getIssuesList(): any{
    return this.issuesList;
  }

  getIssueById(id: any): any{
    return this.issuesList.find(x=>x.id === id);
  }

  // ...........
  getRequirementList(): any{
    return this.requirementList;
  }

  getRequirementById(id: any): any{
    return this.requirementList.find(x=>x.id === id);
  }
}
