import { Producto } from './producto.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThanOrEqual, LessThan, MoreThanOrEqual } from 'typeorm';
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
        try {
            //Get all
            //const result: Producto[] = await this.productoRepository.find();

            //Select * from e01_producto where (codigo_producto > 100 AND precio <= 200) OR (codigo_producto < 20 AND precio >= 200)
            const result: Producto[] = await this.productoRepository.find({
                where:[
                    {"codigo_producto": MoreThan(100), "precio": LessThanOrEqual(200)},
                    {"codigo_producto": LessThan(20), "precio": MoreThanOrEqual(200)}
                ]
            });
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    //TYPEORM GET by id
    public async getById(id: number): Promise<Producto>{
        console.log("Getting Product id: " + id);
        try {
            const producto: Producto = await this.productoRepository.findOne(id);
            if(producto){
                return producto;
            }else{
                throw new HttpException('No se pudo encontrar el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    //Add Product
    public async addProduct(newProducto: ProductoDTO):Promise<Producto>{
        try {
            const productoCreado: Producto = await this.productoRepository.save(new Producto(
                newProducto.marca,
                newProducto.nombre,
                newProducto.descripcion,
                newProducto.precio,
                newProducto.stock)
            );
            if(productoCreado.getCodigoProducto()){
                return productoCreado;
            }else{
                throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
    }

    //#### Update Product ####
    public async updateProduct(newProductoParams: ProductoDTO, id: number): Promise<Producto>{
        try {
            let producto: Producto = await this.getById(id);

            if(producto.getCodigoProducto()){

                producto.setMarca(newProductoParams.marca);
                producto.setNombre(newProductoParams.nombre);
                producto.setPrecio(newProductoParams.precio);
                producto.setDescripcion(newProductoParams.descripcion);
                producto.setStock(newProductoParams.stock);

                const productoUpdated: Producto = await this.productoRepository.save(producto);

                if (productoUpdated) {
                    return productoUpdated;
                }else {
                    throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_MODIFIED);    
                }                
            }else{
                throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
    }

    // #### Delete Producto ####
    public async deleteProduct(id: number){        
        try {
            let producto: Producto = await this.getById(id);
            if (producto.getCodigoProducto()) {
                let deleteResult = await this.productoRepository.delete(id);
                if (deleteResult.affected) {


                }
                return deleteResult;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

}
