import { Cliente } from './../cliente/cliente.entity';
import { ClienteService } from './../cliente/cliente.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Factura } from './factura.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Producto } from 'src/producto/producto.entity';

@Injectable()
export class FacturaService {

    constructor(
        @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>,
        @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>
        ){}

     public async getAll(): Promise<Factura[]>{
        try {
            const result: Factura[] = await this.facturaRepository.find({
                relations: ["cliente"]
            });
            //const detalle_factura = await this.facturaRepository.find({ relations: ["producto"] });

            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    async getByFactura(facturaId: number): Promise<Cliente> {
        let response: Cliente = await this.clienteRepository.findOne({
            where: [{
                "nro_cliente": Equal(facturaId)
            }]
        })
        return response
    }
}
