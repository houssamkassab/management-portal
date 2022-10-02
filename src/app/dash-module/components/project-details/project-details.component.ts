import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PjManagementService } from '../../../services/pj-management.service';
import { AddAttachmentDialogComponent } from '../../dialogs/add-attachment-dialog/add-attachment-dialog.component';
import { AddCommentDialogComponent } from '../../dialogs/add-comment-dialog/add-comment-dialog.component';
import { AddMemberDialogComponent } from '../../dialogs/add-member-dialog/add-member-dialog.component';
import { CreateUpdateProjectComponent } from '../../dialogs/create-update-project/create-update-project.component';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectData: any;
  projectID: any;
  selectedTabIndex: number = 0;
  phases: any[] = [
    {
      name: 'Project Created',
      desc:'21 July 2022'
    },
    {
      name: 'Plan Approved',
      desc:'22 July 2022'
    },
  ];


  planninData: any[]=[];
  parentTabIndex = 0;

  constructor(private pjService: PjManagementService,
              private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectID= this.route.snapshot.paramMap.get('ID');
    this.projectData = this.pjService.getProjectById(+this.projectID);

    this.planninData = this.pjService.getPlanninList();
  }


  changeTabs(event: any): void{
    this.selectedTabIndex = event.index;
  }

  changeParentTabs(event: any): void{
    this.parentTabIndex = event.index;
  }

  addComment(): void{
    const dialogRef = this.dialog.open(AddCommentDialogComponent, {
      width: '700px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
        this.projectData.comments.push({
          userName: 'User',
          comment: result
        });
    });

  }

  addAttachment(): void{

    const dialogRef = this.dialog.open(AddAttachmentDialogComponent, {
      width: '700px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
        this.projectData.attachments.push({
          name: result.name,
          size: result.size + 'KB',
          icon: 'photo',
        });
    });


  }
  addInternalMember(): void{
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '700px',
      height: '500px',
      data : true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
        console.log({result});
        this.projectData.internalTeam.push({
          userName: result.fullName,
          role: result.role,
          imageUrl:'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg'
        });
    });

  }
  addExternalMember(): void{
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '700px',
      height: '500px',
      data: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
        this.projectData.externalTeam.push({
          userName: result.fullName,
          role: result.role,
          imageUrl:'https://cdn4.vectorstock.com/i/1000x1000/49/03/software-developer-vector-12104903.jpg'
        });
    });
  }

  updateProject(): void{
    const dialogRef = this.dialog.open(CreateUpdateProjectComponent, {
      width: '700px',
      height: '700px',
      data: this.projectData
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      {
        this.projectData.department = result.department;
        this.projectData.title = result.title;
        this.projectData.start_date = result.start_date;
        this.projectData.end_date = result.end_date;
        this.projectData.description = result.description;
        this.projectData.owner = result.owner;
        this.projectData.vendor = result.vendor;
        this.projectData.progress = result.progress;
      }
    });
  }
}
