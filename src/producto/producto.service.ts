import { Producto } from './producto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoDTO } from './producto.dto';

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
            productos.push(new Producto(element['marca'],
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
        console.log("Getting Product id: " + id);
        const producto = await this.productoRepository.findOne(id);
        return this.productoRepository.create({...producto});
    }

    //Add Product - Necesita cambios en el schema de BD (autoincremental)
    public async addProduct(newProducto: ProductoDTO):Promise<Producto>{
        let result = await this.productoRepository.save(new Producto(
                                                        newProducto.marca,
                                                        newProducto.nombre,
                                                        newProducto.descripcion,
                                                        newProducto.precio,
                                                        newProducto.stock));
        let productoCreado: Producto = this.productoRepository.create({...result});
        if(productoCreado.getCodigoProducto()){
            return productoCreado;
        }
        return null;
    }
}
