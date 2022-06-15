import { Habitacion } from "../modelo/habitacion";
import * as data from "./habitacion-precio";

export const HABITACIONES: Habitacion[] = [
    { numero: '101', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: data.PRECIO101 },
    { numero: '201', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO201 },
    { numero: '202', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: data.PRECIO202 },
    { numero: '301', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: data.PRECIO301 },
    { numero: '302', capacidadMaxima: 4, aire: true, balcon: false, cama1m: 2, cama140m: 1, precios: data.PRECIO302 },
    { numero: '303', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO303 },
    { numero: '304', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: data.PRECIO304 },
    { numero: '401', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO401 },
    { numero: '402', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: data.PRECIO402 },
    { numero: '501', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: data.PRECIO501 },
    { numero: '502', capacidadMaxima: 5, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: data.PRECIO502 },
    { numero: '503', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO503 },
    { numero: '504', capacidadMaxima: 4, aire: false, balcon: false, cama140m: 1, precios: data.PRECIO504 },
    { numero: '601', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO601 },
    { numero: '602', capacidadMaxima: 4, aire: true, balcon: false, cama140m: 1, precios: data.PRECIO602 },
    { numero: '701', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 1, precios: data.PRECIO701 },
    { numero: '702', capacidadMaxima: 4, aire: false, balcon: false, cama1m: 3, cama140m: 1, precios: data.PRECIO702 },
    { numero: '703', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO703 },
    { numero: '801', capacidadMaxima: 4, aire: true, balcon: false, cama160m: 1, precios: data.PRECIO801 },
    { numero: 'PH', capacidadMaxima: 4, aire: true, balcon: true, precios: data.PRECIOPH },
];