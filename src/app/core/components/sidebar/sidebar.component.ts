import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/core/modelo/menu-item';

declare const $: any;

export const ROUTES: MenuItem[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'dashboard', class: '' },
    { path: 'habitacion', title: 'Habitaciones',  icon:'king_bed', class: '' },
    { path: 'huesped', title: 'Huesped',  icon:'person', class: '' },
    { path: 'producto', title: 'Productos',  icon:'liquor', class: '' },
    { path: 'factura', title: 'Facturar',  icon:'receipt_long', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  };

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
