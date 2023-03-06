import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorDTO } from './dto/proveedor.dto';

@Controller('api/v1/proveedor')
export class ProveedorController {
    constructor(private readonly proveedorServicio:ProveedorService){}

    @Get()
    todos(){
        return this.proveedorServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:number){
        return this.proveedorServicio.uno(id);
    }
    @Post()
    insertar(@Body() proveedor:ProveedorDTO ){
        return this.proveedorServicio.insertar(proveedor);
    }
    @Delete(':id')
    eliminar(@Param('id') id:number){
        return this.proveedorServicio.eliminar(id);
    }
}
