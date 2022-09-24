import { Component, OnInit } from '@angular/core';
import { PjManagementService } from '../../../services/pj-management.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {
  allData=[];

  colsOpions = {
    cols: [
      {
        header: 'Details',
        key: 'details'
      },
      {
        header: 'Planning',
        key: 'planning',
      },
      {
        header: 'Team',
        key: 'team',
      },
      {
        header: 'Risk',
        key: 'risk',
      },{
        header: 'Files/Docs',
        key: 'files',
      },{
        header: 'Issues',
        key: 'issues',
      },{
        header: 'Obstacles',
        key: 'obstacles',
      },{
        header: 'List of requirements',
        key: 'requirements',
      },{
        header: 'Comment',
        key: 'comment',
      }
    ],
  };

  constructor(private pjService: PjManagementService) { }

  ngOnInit(): void {
    this.allData = this.pjService.getProjectsData();
  }

}
