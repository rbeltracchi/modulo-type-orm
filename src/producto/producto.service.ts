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

    public async getAll(): Promise<any>{
        console.log("getAll de productos")
        const result = await this.productoRepository.query("select * from e01_producto");
        console.log("resultado: " + result);
        const producto = new Producto(result[0]['codigo_producto'],
                                        result[0]['marca'],
                                        result[0]['nombre'],
                                        result[0]['descripcion'],
                                        result[0]['precio'],
                                        result[0]['stock']);
        console.log("producto: " + producto);
        return producto;
    }
}
