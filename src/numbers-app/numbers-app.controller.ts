import { Body, Controller, Get, Post } from '@nestjs/common';
import { NumbersAppService } from './numbers-app.service';
import { SequentialNumberDTO } from './SequentialNumber.dto';
import { SequentialNumber } from './SequentialNumberDemo.entity';

@Controller('numbers-app')
export class NumbersAppController {

    public constructor(private readonly numbersAppService: NumbersAppService) { }

    @Get()
    public getAllNumbers(): any {
        return this.numbersAppService.getAllNumbers();
    }

    @Post()
    createArticle(@Body() numberDTO: SequentialNumberDTO): Promise<SequentialNumber> {
        return this.numbersAppService.addProduct(numberDTO);
    }


}
