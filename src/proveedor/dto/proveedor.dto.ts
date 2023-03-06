import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { ProductosDTO } from '../../productos/dto/productos.dto';
@Entity()
export class ProveedorDTO{
   @PrimaryGeneratedColumn()
    idProveedor:number;
    @IsNotEmpty()
    @IsString()
    @Column()
    Nombre:string;
    @IsNotEmpty()
    @IsString()
    @Column()
    telefono:string;
    @IsNotEmpty()
    @IsEmail()
    @Column()
    email:string;
    @IsNotEmpty()
    @IsString()
    @Column()
    direccion:string;

    @CreateDateColumn({name: 'create_at'})
    craeteAt:Date;

    @UpdateDateColumn({name: 'update_at'})
    updateAt:Date;


    @ManyToMany((type)=> ProductosDTO)
    @JoinTable()
    prodcutos:ProductosDTO[]
}