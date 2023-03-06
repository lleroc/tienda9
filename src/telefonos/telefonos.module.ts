import { Module } from '@nestjs/common';
import { TelefonosController } from './telefonos.controller';
import { TelefonosService } from './telefonos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefonosDTO } from './dto/telefonos.dto';

@Module({
  imports:[TypeOrmModule.forFeature([TelefonosDTO])],
  controllers: [TelefonosController],
  providers: [TelefonosService]
})
export class TelefonosModule {}
