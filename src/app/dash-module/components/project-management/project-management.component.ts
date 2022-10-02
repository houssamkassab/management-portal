import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { ActionEvents } from '../../../shared/enums/action-events';
import { CreateUpdateProjectComponent } from '../../dialogs/create-update-project/create-update-project.component';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {
  allData: any[]=[];

  colsOpions = {
    cols: [
      {
        header: 'department',
        key: 'department'
      },
      {
        header: 'title',
        key: 'title',
      },
      /*{
        header: 'start_date',
        key: 'start_date',
      },
      {
        header: 'end_date',
        key: 'end_date',
      },*/
      {
        header: 'owner',
        key: 'owner',
      },{
        header: 'vendor',
        key: 'vendor',
      },{
        header: 'Status',
        key: 'status',
      },{
        header: 'Progress',
        key: 'progress',
      },
      {
        header: 'Phase',
        key: 'phase',
      },{
        header: 'duration',
        key: 'duration',
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
  projectID: any;

  constructor(private pjService: PjManagementService,
              private _route: ActivatedRoute,
              private dialog: MatDialog,
              private _router: Router) { }

  ngOnInit(): void {
    this.projectID = this._route.snapshot.paramMap.get("ID");
    this.allData = this.pjService.getProjectsData();
  }
  goToDetails(event: any): void{
    this._router.navigate([`/project-management/${event.id}`]);
  }
  newProject(event: any): void{
    if(event?.toCreateItem){
      const dialogRef = this.dialog.open(CreateUpdateProjectComponent, {
        width: '700px',
        height: '700px',
        data: null
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        if(result)
        {
          const newRow: any = {
            id: this.allData.length + 1,
            ...result
          };

          console.log({newRow});

          // this.allData.push(newRow);
          this.pjService.projectsData.push(newRow);
          this.allData = this.pjService.getProjectsData();
          console.log('allData=> ', this.allData);
          this.reloadComponent();
          // this.projectData.department = result.department;
          // this.projectData.title = result.title;
          // this.projectData.start_date = result.start_date;
          // this.projectData.end_date = result.end_date;
          // this.projectData.description = result.description;
          // this.projectData.owner = result.owner;
          // this.projectData.vendor = result.vendor;
          // this.projectData.progress = result.progress;
        }
      });
    }
  }

  reloadComponent() {
    let currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
  }
}
