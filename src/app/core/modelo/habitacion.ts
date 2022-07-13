import { HabitacionEstado } from "./habitacion-estado.enum";
import { HabitacionPrecio } from "./habitacion-precio";

export interface Habitacion {
    numero: string,
    aire: boolean,
    porHoras: boolean,
    cama1m?: number,
    cama140m?: number,
    cama160m?: number,
    cama180m?: number,
    yacuzzi?: boolean,
    estado?: HabitacionEstado,
    precios: HabitacionPrecio[]
}