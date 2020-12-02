import { Factura } from './../factura/factura.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('E01_CLIENTE')
export class Cliente {

    @PrimaryGeneratedColumn()
    private nro_cliente: number;

    @Column()
    private nombre: string;

    @Column()
    private apellido: string;

    @Column()
    private direccion: string;

    @Column()
    private activo: number;

    @OneToMany((type) => Factura, factura => factura.cliente)
    public facturas: Factura[];


    public constructor(nombre? : string, apellido? : string, direccion? : string, activo? : number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.activo = activo;
    }

    public getNro_cliente(): number {
        return this.nro_cliente;
    }

    public setNro_cliente(nro_cliente: number): void {
        this.nro_cliente = nro_cliente;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getActivo(): number {
        return this.activo;
    }

    public setActivo(activo: number): void {
        this.activo = activo;
    }

    public getFacturas(): Factura[] {
        return this.facturas;
    }

    public setFacturas(facturas: Factura[]): void {
        this.facturas = facturas;
    }
}