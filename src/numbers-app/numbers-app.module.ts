import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumbersAppController } from './numbers-app.controller';
import { NumbersAppService } from './numbers-app.service';
import { SequentialNumber } from './SequentialNumberDemo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SequentialNumber
    ])
  ],
  controllers: [NumbersAppController],
  providers: [NumbersAppService]
})
export class NumbersAppModule {}
