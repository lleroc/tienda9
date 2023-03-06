import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { TelefonosModule } from './telefonos/telefonos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:"localhost",
      port:3306,
      username:'root',
      password:'root',
      database:"Tienda9",
      entities:["dist/**/**/*.dto{.ts,.js}"],
      synchronize:true,
      dropSchema:true
    }),
    ProductosModule,
    ProveedorModule,
    TelefonosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
