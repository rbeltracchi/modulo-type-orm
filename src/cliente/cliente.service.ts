import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Equal, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from 'src/producto/producto.entity';
import { Telefono } from 'src/telefono/telefono.entity';

@Injectable()
export class ClienteService {
    
    constructor(
        @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,
        @InjectRepository(Telefono) private readonly telefonoRepository: Repository<Telefono>
        ){}
        
        public async getClientes(token): Promise<Cliente[]>{
            console.log("Get All clientes");

            if (!token.token) {
                throw new HttpException({
                    status: HttpStatus.UNAUTHORIZED,
                }, HttpStatus.UNAUTHORIZED);
            }

            try {
                
                /*const user = await createQueryBuilder("Telefono")
                .leftJoinAndSelect("Telefono.cliente","cliente")
                .getMany();*/
                
                const result= await this.clienteRepository.find({
                    relations: ["facturas"]
                });
                return result
                
            } catch (error) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: "there is an error in the request, " + error,
                }, HttpStatus.NOT_FOUND);
            }
        }
        
        public async getByCliente(id: number): Promise<any> {
            try {

                const user = await this.telefonoRepository.createQueryBuilder("Telefono")
                .innerJoinAndSelect("Telefono.cliente","cliente")
                .where("cliente.nro_cliente = :nro",{nro:id })
                .getMany();

               /* const result= await this.clienteRepository.createQueryBuilder("e01_cliente")
                .leftJoinAndSelect()
                console.log(result);
                return result*/

                return user;
                
            } catch (error) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: "there is an error in the request, " + error,
                }, HttpStatus.NOT_FOUND);
            }
        }
    }
    