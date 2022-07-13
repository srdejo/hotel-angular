import { MenuItem } from "../modelo/menu-item";

export abstract class Menu{
    static readonly ITEMS: MenuItem[] = [
        { path: '/home', title: 'Inicio',  icon: 'dashboard', class: '' },
        /*
        { path: 'habitacion', title: 'Habitaciones',  icon:'king_bed', class: '' },
        { path: 'huesped', title: 'Huesped',  icon:'person', class: '' },
        { path: 'producto', title: 'Productos',  icon:'liquor', class: '' },
        { path: 'factura', title: 'Facturar',  icon:'receipt_long', class: '' },*/
    ];
}