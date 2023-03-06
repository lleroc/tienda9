import { Module } from '@nestjs/common';
import { ProveedorController } from './proveedor.controller';
import { ProveedorService } from './proveedor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorDTO } from './dto/proveedor.dto';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProveedorDTO])
  ],
  controllers: [ProveedorController],
  providers: [ProveedorService],
  exports:[ProveedorService]
})
export class ProveedorModule {}
