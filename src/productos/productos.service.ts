import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProductosDTO } from './dto/productos.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductosDTO)
    private readonly respositorio: Repository<ProductosDTO>,
  ) {}

  async todos(): Promise<ProductosDTO[]> {
    return await this.respositorio.find();
  }
  async uno(id: number): Promise<ProductosDTO> {
    return await this.respositorio.findOne({where: {idProducto : id}});
  }
  async insertar(producto: ProductosDTO): Promise<ProductosDTO> {
    return await this.respositorio.save(producto);
  }
  async actualizar(id: number, producto: ProductosDTO): Promise<ProductosDTO> {
    
    return; //await this.respositorio.update(producto.idProducto,producto);
  }
  async eleiminar(id: number):Promise<DeleteResult>{
    return await this.respositorio.delete(id);
  }
}
