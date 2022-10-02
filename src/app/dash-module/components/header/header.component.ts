import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  sidenavWidth = 4;
  panelOpenState= false;
  pj_Id: any;
  toShowInside: boolean;

  constructor(private router: Router,private _route: ActivatedRoute) {}

  menu: any []= [];

  ngOnInit() {
    this._route.paramMap.subscribe((paramMaps)=> {this.pj_Id = paramMaps.get("ID")});

    this.menu = [
      {
        displayName: 'HomePage',
        iconName: 'home',
        route: '/home',
      },
      /*  {
          displayName: 'Event Management',
          iconName: 'event_note',
          route: '/event-management'
        },*/
      {
        displayName: 'Project Management',
        iconName: 'settings_applications',
        route: '/project-management',
      },
      {
        displayName: 'Operation Management',
        iconName: 'edit_square',
        route: '/operation-management',
      },
      /*{
        displayName: 'Project Details',
        iconName: 'details',
        route: `/project-management/${this.pj_Id}`,
        toShowInside: !!this.pj_Id
      },*/
      {
        displayName: 'Finance Management',
        iconName: 'local_atm',
        children: [
          {
            displayName: 'Dashboard',
            iconName: 'dashboard',
            route: '/dashboard'
          },
          {
            displayName: 'Budget',
            iconName: 'account_balance_wallet',
            route: '/budget'
          },
          {
            displayName: 'Purchase Request',
            iconName: 'credit_score',
            route: '/purchase-request'
          },
          {
            displayName: 'Purchase Order',
            iconName: 'credit_score',
            route: '/purchase-order'
          }
          ,{
            displayName: 'Invoices',
            iconName: 'credit_score',
            route: '/invoices'
          }
        ]
      }
    ];
    this.decrease();


  }
  toggleSideNav(sidenav: any): void{
    sidenav.toggle();
    if(sidenav.opened){
      this.increase();
    }
    else{
      this.decrease();
    }
  }
  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 4;
  }
 /* sideItemClicked(item: any): void{
    if(item.displayName === 'Project Management')
      this.toShowInside = true;
    else
      this.toShowInside = false;
    console.log({item});
  }*/
}
