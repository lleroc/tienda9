import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDTO } from './dto/productos.dto';

@Controller('api/v1/productos')
export class ProductosController {
    constructor(private readonly productosServicio:ProductosService){}
    @Get()
    todos(){
        return this.productosServicio.todos()
    }
    @Get(':id')
    uno(@Param('id') id:number){
        return this.productosServicio.uno(id)
    }
    @Post()
    insertar(@Body() producto:ProductosDTO){
        return this.productosServicio.insertar(producto);
    }
    
    @Delete(':id')
    eliminar(@Param('id') id:number){
        return this.productosServicio.eleiminar(id)
    }

}
