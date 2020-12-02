import { Factura } from './../factura/factura.entity';
import { FacturaService } from './../factura/factura.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from 'src/producto/producto.entity';

@Injectable()
export class ClienteService {
    
    constructor(
        @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,
        @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>
    ){}

    public async getClientes(): Promise<Cliente[]>{
        console.log("Get All clientes");
        try {
            const result= await this.clienteRepository.find({
                relations: ["facturas"]
            });
            console.log(result);
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    /*public async getByFactura(facturaId: number): Promise<Cliente[]> {
        console.log("Get cliente By facturaId: " + facturaId);
        try {
            const result= await this.clienteRepository.createQueryBuilder("e01_cliente")
                                                        .leftJoinAndSelect()
            console.log(result);
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }*/
}
