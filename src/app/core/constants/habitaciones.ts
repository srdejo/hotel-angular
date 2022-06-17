import { Habitacion } from "../modelo/habitacion";
import { Precios } from "./habitacion-precio";

export abstract class Habitaciones {

    static readonly ITEMS: Habitacion[] = [
        { numero: '101', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: Precios.PRECIO101 },
        { numero: '201', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO201 },
        { numero: '202', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: Precios.PRECIO202 },
        { numero: '301', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: Precios.PRECIO301 },
        { numero: '302', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: Precios.PRECIO302 },
        { numero: '303', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO303 },
        { numero: '304', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: Precios.PRECIO304 },
        { numero: '401', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO401 },
        { numero: '402', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: Precios.PRECIO402 },
        { numero: '501', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: Precios.PRECIO501 },
        { numero: '502', capacidadMaxima: 5, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: Precios.PRECIO502 },
        { numero: '503', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO503 },
        { numero: '504', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: Precios.PRECIO504 },
        { numero: '601', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO601 },
        { numero: '602', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: Precios.PRECIO602 },
        { numero: '701', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: Precios.PRECIO701 },
        { numero: '702', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: Precios.PRECIO702 },
        { numero: '703', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO703 },
        { numero: '801', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: Precios.PRECIO801 },
        { numero: 'PH', capacidadMaxima: 4, aire: true, balcon: true, precios: Precios.PRECIOPH },
    ];
}