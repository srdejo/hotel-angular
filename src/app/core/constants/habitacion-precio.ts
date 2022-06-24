import { HabitacionPrecio } from "../modelo/habitacion-precio";

export abstract class Precios {

    static readonly PRECIO101: HabitacionPrecio[] = [
        { habitacion: '101', cantidadPersonas: 3, precioPorPersona: true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '101', cantidadPersonas: 3, precioPorPersona: true, aire: true, esAdicional: false, esNinio: false, precio: 40000 },
        { habitacion: '101', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: false, precio: 20000 },
        { habitacion: '101', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '101', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '101', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '101', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 90000 }
    ];

    static readonly PRECIO201: HabitacionPrecio[] = [
        { habitacion: '201', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '201', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '201', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '201', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '201', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '201', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO202: HabitacionPrecio[] = [
        { habitacion: '202', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '202', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '202', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '202', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '202', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '202', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 90000 },
    ];

    static readonly PRECIO301: HabitacionPrecio[] = [
        { habitacion: '301', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 40000 }
    ];

    static readonly PRECIO302: HabitacionPrecio[] = [
        { habitacion: '302', cantidadPersonas: 3, precioPorPersona: true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '302', cantidadPersonas: 3, precioPorPersona: true, aire: true, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '302', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '302', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '302', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '302', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '302', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 90000 }
    ];

    static readonly PRECIO303: HabitacionPrecio[] = [
        { habitacion: '303', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '303', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '303', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '303', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '303', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '303', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO304: HabitacionPrecio[] = [
        { habitacion: '304', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 40000 },
        { habitacion: '304', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '304', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '304', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
    ]

    static readonly PRECIO401: HabitacionPrecio[] = [
        { habitacion: '401', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '401', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '401', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '401', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '401', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '401', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO402: HabitacionPrecio[] = [
        { habitacion: '402', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '402', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '402', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '402', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
    ];

    static readonly PRECIO501: HabitacionPrecio[] = [
        { habitacion: '501', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 40000 },
    ];

    static readonly PRECIO502: HabitacionPrecio[] = [
        { habitacion: '502', cantidadPersonas: 5, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '502', cantidadPersonas: 3, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '502', cantidadPersonas: 4, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '502', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '502', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '502', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
    ];

    static readonly PRECIO503: HabitacionPrecio[] = [
        { habitacion: '503', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '503', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '503', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '503', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '503', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '503', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO504: HabitacionPrecio[] = [
        { habitacion: '504', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '504', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '504', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 40000 },
        { habitacion: '504', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
    ]

    static readonly PRECIO601: HabitacionPrecio[] = [
        { habitacion: '601', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '601', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '601', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '601', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '601', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '601', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO602: HabitacionPrecio[] = [
        { habitacion: '602', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '602', cantidadPersonas: 1, aire: true, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '602', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '602', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '602', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
        { habitacion: '602', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 90000 },
    ];

    static readonly PRECIO701: HabitacionPrecio[] = [
        { habitacion: '701', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '701', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '701', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '701', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
    ];

    static readonly PRECIO702: HabitacionPrecio[] = [
        { habitacion: '702', cantidadPersonas: 5, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '702', cantidadPersonas: 3, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '702', cantidadPersonas: 4, precioPorPersona:true, aire: false, esAdicional: false, esNinio: false, precio: 30000 },
        { habitacion: '702', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '702', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 50000 },
        { habitacion: '702', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 70000 },
    ];

    static readonly PRECIO703: HabitacionPrecio[] = [
        { habitacion: '703', cantidadPersonas: 2, aire: true, yacuzzi: true, horas: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '703', cantidadPersonas: 2, aire: true, yacuzzi: true, esAdicional: false, esNinio: false, precio: 100000 },
        { habitacion: '703', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '703', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '703', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '703', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '703', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '703', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIO801: HabitacionPrecio[] = [
        { habitacion: '801', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: '801', cantidadPersonas: 1, aire: false, esAdicional: true, esNinio: true, precio: 20000 },
        { habitacion: '801', cantidadPersonas: 1, aire: false, esAdicional: false, esNinio: false, precio: 60000 },
        { habitacion: '801', cantidadPersonas: 1, aire: true, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '801', cantidadPersonas: 2, aire: false, esAdicional: false, esNinio: false, precio: 80000 },
        { habitacion: '801', cantidadPersonas: 2, aire: true, esAdicional: false, esNinio: false, precio: 100000 },
    ];

    static readonly PRECIOPH: HabitacionPrecio[] = [
        { habitacion: 'PH', cantidadPersonas: 1, precioPorPersona:true, aire: false, yacuzzi: true, horas: true, esAdicional: false, esNinio: false, precio: 30000 },
    ];

    static readonly PRECIOPH801: HabitacionPrecio[] = [
        { habitacion: 'PH801', cantidadPersonas: 2, aire: false, yacuzzi: true, horas: true, esAdicional: false, esNinio: false, precio: 150000 },
        { habitacion: 'PH801', cantidadPersonas: 2, aire: false, yacuzzi: true, esAdicional: false, esNinio: false, precio: 200000 },
        { habitacion: 'PH801', cantidadPersonas: 1, aire: false, yacuzzi: true, horas: true, esAdicional: true, esNinio: false, precio: 30000 },
        { habitacion: 'PH801', cantidadPersonas: 1, aire: false, yacuzzi: true, esAdicional: true, esNinio: false, precio: 40000 },
    ];
}