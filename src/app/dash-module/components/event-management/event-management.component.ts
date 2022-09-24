import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  eventData: any[]=[];
  colsOpions = {
    cols: [
      {
        header: 'Details',
        key: 'details'
      },
      {
        header: 'Agenda',
        key: 'agenda',
      },
      {
        header: 'Team',
        key: 'team',
      },
      {
        header: 'Expenses',
        key: 'expenses',
      },{
        header: 'Files/Docs',
        key: 'files',
      },{
        header: 'Meetings',
        key: 'meetings',
      },{
        header: 'Obstacles',
        key: 'obstacles',
      },{
        header: 'Sponserships',
        key: 'sponsorships',
      },{
        header: 'Host',
        key: 'host',
      }
      ,{
        header: 'Tasks',
        key: 'tasks',
      }
      ,{
        header: 'Attendence',
        key: 'attendence',
      }
      ,{
        header: 'Website Configuration',
        key: 'configuration',
      }
    ],
  };

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventData = this.eventService.getEventData();
  }

}
