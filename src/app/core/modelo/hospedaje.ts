import { Habitacion } from "./habitacion";
import { Huesped } from "./huesped";

export interface Hospedaje {
    habitacion: Habitacion,
    huesped?: Huesped[],
    adultos: number,
    ninios: number,
    fecha_ingreso: string,
    dias: number,
    fecha_salida?: string,
    porHoras: boolean,
    aire: boolean,
    colchonetas: number,
    toallas: number,
    cobijas: number,
    carros: number,
    motos: number
}