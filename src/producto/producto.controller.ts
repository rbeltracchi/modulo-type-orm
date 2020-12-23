import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductoDTO } from './producto.dto';
import { Producto } from './producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    public constructor(private readonly productoService: ProductoService) { }

    @Get("get-all-raw")
    public getAllProductosRaw(): Promise<Producto[]> {
        return this.productoService.getAllRaw();
    }

    @Get("get-all")
    public getAllProductos(): Promise<Producto[]>{
        return this.productoService.getAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    public getProductoById(@Param('id') id: number): Promise<Producto>{
        return this.productoService.getById(id);
    }

    @Post("new-producto")
    createArticle(@Body() productoDto: ProductoDTO): Promise<Producto> {
        return this.productoService.addProduct(productoDto);
    }

    @Put(":id")
    public updateProducto(@Body() productoDto: ProductoDTO, @Param('id') id: number): Promise<Producto>{
        return this.productoService.updateProduct(productoDto,id);
    }

    @Delete(":id")
    public deleteProducto(@Param('id') id: number){
        return this.productoService.deleteProduct(id);
    }
}
