import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('e01_producto')
export class Producto {
    @PrimaryGeneratedColumn()
    codigoProducto: number;

    @Column()
    marca: string;
   
    @Column()
    nombre: string;
   
    @Column()
    descripcion: number;
   
    @Column()
    precio: number;

    @Column()
    stock: number;

    public constructor(codigo_producto: number, marca: string, nombre: string, descripcion: number, precio: number, stock: number){
        this.codigoProducto = codigo_producto;
        this.marca = marca;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
}  