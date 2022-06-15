import { HabitacionPrecio } from "./habitacion-precio";

export interface Habitacion {
    numero: String,
    capacidadMaxima: number,
    aire: boolean,
    balcon: boolean,
    cama1m?: number,
    cama140m?: number,
    cama160m?: number,
    cama180m?: number,
    yacuzzi?:boolean,
    precios: HabitacionPrecio[]
}