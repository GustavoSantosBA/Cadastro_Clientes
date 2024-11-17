import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent {
  menus: any[] = [
    {
      href: '#dashboards',
      routerLink: '/dashboard',
      id: 'item1',
      label: 'Dashboard',
      icone: 'grid-1',
      subMenu: [
      ]
    }
  ];
}
