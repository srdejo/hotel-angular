import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/core/constants/menu-items';
import { MenuItem } from 'app/core/modelo/menu-item';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = Menu.ITEMS.filter(menuItem => menuItem);
  };

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
