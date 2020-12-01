import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente) 
        private readonly productoRepository: Repository<Cliente>
    ){}
}
