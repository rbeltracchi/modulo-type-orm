import { Producto } from 'src/producto/producto.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E01_FACTURA')
export class Factura {
    
    @PrimaryGeneratedColumn()
    private nro_factura: number;
    
    @Column()
    private fecha: Date;
    
    @Column()
    private total_sin_iva: number;
    
    @Column()
    private iva: number;
    
    @Column()
    private total_con_iva: number;
    
    @Column()
    private nro_cliente: number;    
    
    public constructor(fecha?: Date, total_sin_iva?: number, iva?: number, total_con_iva?: number, nro_cliente?: number){
        this.fecha = fecha;
        this.iva = iva;
        this.nro_cliente = nro_cliente;
        this.total_con_iva = total_con_iva;
        this.total_sin_iva = total_sin_iva;
    }
    
    public getNro_factura(): number {
        return this.nro_factura;
    }
    
    public setNro_factura(nro_factura: number): void {
        this.nro_factura = nro_factura;
    }
    
    public getFecha(): Date {
        return this.fecha;
    }
    
    public setFecha(fecha: Date): void {
        this.fecha = fecha;
    }
    
    public getTotal_sin_iva(): number {
        return this.total_sin_iva;
    }
    
    public setTotal_sin_iva(total_sin_iva: number): void {
        this.total_sin_iva = total_sin_iva;
    }
    
    public getIva(): number {
        return this.iva;
    }
    
    public setIva(iva: number): void {
        this.iva = iva;
    }
    
    public getTotal_con_iva(): number {
        return this.total_con_iva;
    }
    
    public setTotal_con_iva(total_con_iva: number): void {
        this.total_con_iva = total_con_iva;
    }
    
    public getNro_cliente(): number {
        return this.nro_cliente;
    }
    
    public setNro_cliente(nro_cliente: number): void {
        this.nro_cliente = nro_cliente;
    }
    
}  