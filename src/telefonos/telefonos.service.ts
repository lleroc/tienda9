import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TelefonosDTO } from './dto/telefonos.dto';

@Injectable()
export class TelefonosService {
    constructor(@InjectRepository(TelefonosDTO) private readonly telefono:Repository<TelefonosDTO>){}

    async todos():Promise<TelefonosDTO[]>{
        return await this.telefono.find();
    }
    async uno(id:number):Promise<TelefonosDTO>{
        return await this.telefono.findOne( { where:{idTelfono:id}})
    }
    async insertar(telefono: TelefonosDTO){
        return await this.telefono.save(telefono);
    }
    async eliminar(id:number){
        await this.telefono.delete(id)
        return {status:HttpStatus.OK, msg:"Eliminado con éxisto"}
    }
}
