import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SequentialNumberDTO } from './SequentialNumber.dto';
import { SequentialNumber } from './SequentialNumberDemo.entity';

@Injectable()
export class NumbersAppService {

    constructor(
        @InjectRepository(SequentialNumber) 
        private readonly productoRepository: Repository<SequentialNumber>
    ){}


    public async getAllNumbers(): Promise<any>{
        console.log("Get All");
        try {
            const result: SequentialNumber[] = await this.productoRepository.find();
            console.log(result);
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    public async addProduct(number: SequentialNumberDTO):Promise<SequentialNumber>{
        try {
            
            const newNumber: SequentialNumber = await this.productoRepository.save(new SequentialNumber(
                number.SequentialNumber,
                number.user
                )
            );

            return newNumber;
            
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
    }
    
}
