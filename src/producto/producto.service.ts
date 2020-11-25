import { Producto } from './producto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(Producto) 
        private readonly productoRepository: Repository<Producto>
    ){}

    //CONSULTAS RAW
    public async getAllRaw(): Promise<Producto[]>{
        console.log("getAllRaw de productos")
        const result = await this.productoRepository.query("select * from e01_producto");
        let productos: Producto[] = [];
        result.forEach(element => {
            productos.push(new Producto(element['codigo_producto'],
                                        element['marca'],
                                        element['nombre'],
                                        element['descripcion'],
                                        element['precio'],
                                        element['stock']));
        });
        /*for(let i=0 ; i<result.length; i++){
            productos.push(new Producto(result[i]['codigo_producto'],
            result[i]['marca'],
            result[i]['nombre'],
            result[i]['descripcion'],
            result[i]['precio'],
            result[i]['stock']))
        }*/
        return productos;
    }

    //TYPEORM GET
    public async getAll(): Promise<Producto[]>{
        console.log("Get All productos");
        const result = await this.productoRepository.find();
        let productos: Producto[] = [];
        result.forEach(element => {
            productos.push(this.productoRepository.create({...element}));
        });
        return productos;
    }

    //TYPEORM GET by id
    public async getById(id: number): Promise<Producto>{
        return null;
    }

    public async addProduct(newProducto: Producto):Promise<boolean>{
        return false;
    }
}
