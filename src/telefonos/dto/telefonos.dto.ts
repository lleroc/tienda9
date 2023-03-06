import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProveedorDTO } from '../../proveedor/dto/proveedor.dto';

@Entity()
export class TelefonosDTO{
    @PrimaryGeneratedColumn()
    idTelfono:number;

    @IsNotEmpty()
    @Column()
    @IsString()
    Detalle:string;

    @OneToMany((type) => ProveedorDTO, proveedor => proveedor.idProveedor)
    proveedor:ProveedorDTO[]
}