import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  sidenavWidth = 4;
  panelOpenState= false;

  constructor(private router: Router) {}

  menu: any [] = [
    {
      displayName: 'HomePage',
      iconName: 'home',
      route: 'home',
    },
    {
      displayName: 'Event Management',
      iconName: 'event_note',
      route: '/event-management'

    },
    {
      displayName: 'Project Management',
      iconName: 'settings_applications',
      route: 'porject-management',
    },
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

  ngOnInit() {
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
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}
