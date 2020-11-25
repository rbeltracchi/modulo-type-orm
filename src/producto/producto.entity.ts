import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('e01_producto')
export class Producto {

    @PrimaryGeneratedColumn()
    private codigo_producto: number;

    @Column()
    private marca: string;
   
    @Column()
    private nombre: string;
   
    @Column()
    private descripcion: string;
   
    @Column()
    private precio: number;

    @Column()
    private stock: number;

    public constructor(marca?: string, nombre?: string, descripcion?: string, precio?: number, stock?: number){
        this.marca = marca;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }

    public getCodigoProducto():number{
        return this.codigo_producto;
    }
    
    public setCodigoProducto(codigo_producto: number){
        this.codigo_producto = codigo_producto;
    }
}  