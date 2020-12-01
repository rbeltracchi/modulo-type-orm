import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductoModule,
    ClienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
