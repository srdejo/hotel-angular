import { HabitacionPrecio } from "./habitacion-precio";

export interface Habitacion {
    numero: string,
    capacidadMaxima: number,
    aire: boolean,
    balcon: boolean,
    cama1m?: number,
    cama140m?: number,
    cama160m?: number,
    cama180m?: number,
    yacuzzi?:boolean,
    ocupada?:boolean,
    precios: HabitacionPrecio[]
}