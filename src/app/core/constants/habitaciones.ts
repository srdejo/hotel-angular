import { Habitacion } from "../modelo/habitacion";


export abstract class Habitaciones {

    static readonly ITEMS: Habitacion[] = [
        { numero: '101', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: null },
        { numero: '201', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '202', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: null },
        { numero: '301', capacidadMaxima: 1, aire: false, balcon: false, cama1m: 1, precios: null },
        { numero: '302', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: null },
        { numero: '303', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '304', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: null },
        { numero: '401', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '402', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: null },
        { numero: '501', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: null },
        { numero: '502', capacidadMaxima: 5, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: null },
        { numero: '503', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '504', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: null },
        { numero: '601', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '602', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: null },
        { numero: '701', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: null },
        { numero: '702', capacidadMaxima: 5, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: null },
        { numero: '703', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: '801', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: null },
        { numero: 'PH', capacidadMaxima: 4, aire: true, balcon: true, precios: null },
    ];
}