import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorDTO } from './dto/proveedor.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
    constructor(@InjectRepository(ProveedorDTO) private readonly proveedor:Repository<ProveedorDTO>){}

    async todos():Promise<ProveedorDTO[]>{
        return await this.proveedor.find()
    }
    async uno(id:number):Promise<ProveedorDTO>{
        return await this.proveedor.findOne({where: {idProveedor: id} })
    }
    async insertar(proveedor:ProveedorDTO):Promise<ProveedorDTO>{
        return await this.proveedor.save(proveedor);
    }
    async eliminar(id:number){
        return {status:HttpStatus.OK,msg:"Se elimino con exito"}
    }
}
