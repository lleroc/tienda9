import { IsDate, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Column, Double, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProveedorDTO } from '../../proveedor/dto/proveedor.dto';

@Entity()
export class ProductosDTO{
    @PrimaryGeneratedColumn()
    idProducto: number;
    @Column({length:255})  ///contra la base de datos
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)  //// valida el class-valitor
    nombre: string;
    @Column('date')
    @IsDate()
    @IsNotEmpty()
    fechaingreso:Date;
    @Column()
    @IsNotEmpty()
    cantidad:number;
 

    @Column({default:true})
    @IsNotEmpty()
    Disponilbe:boolean


    @ManyToMany((type)=> ProveedorDTO, (proveedor)=> proveedor.prodcutos)
    proveddor:ProveedorDTO;

}