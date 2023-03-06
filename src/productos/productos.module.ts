import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosDTO } from './dto/productos.dto';

@Module({
  imports:[TypeOrmModule.forFeature([ProductosDTO])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
