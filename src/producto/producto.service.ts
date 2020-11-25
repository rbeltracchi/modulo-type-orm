import { Producto } from './producto.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        let result;
        try {
            result = await this.productoRepository.query("select * from E01_PRODUCTO");    
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
        
        let productos: Producto[] = [];
        result.forEach(element => {
            let p: Producto= new Producto(  element['marca'],
                                            element['nombre'],
                                            element['descripcion'],
                                            element['precio'],
                                            element['stock'])
            p.setCodigoProducto(element['codigo_producto']);
            productos.push(p);
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
        let productos: Producto[] = [];
        try {
            const result = await this.productoRepository.find();

            result.forEach(element => {
                productos.push(this.productoRepository.create({...element}));
            });

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
        return productos;
    }

    //TYPEORM GET by id
    public async getById(id: number): Promise<Producto>{
        console.log("Getting Product id: " + id);
        let producto;
        let producto_creation_response;
        try {
            producto = await this.productoRepository.findOne(id);
            producto_creation_response = this.productoRepository.create({...producto});
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
        return producto_creation_response;
    }

    //Add Product - Necesita cambios en el schema de BD (autoincremental)
    public async addProduct(newProducto: ProductoDTO):Promise<Producto>{
        let productoCreado: Producto;
        
        try {
            let result = await this.productoRepository.save(new Producto(
                newProducto.marca,
                newProducto.nombre,
                newProducto.descripcion,
                newProducto.precio,
                newProducto.stock)
            );

            productoCreado= this.productoRepository.create({...result});
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
        if(productoCreado.getCodigoProducto()){
            return productoCreado;
        }else{
            throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
        }
    }
}
