import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

import { Categorias } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";

@Controller("/categorias")
export class CategoriasController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categorias[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categorias> {
    return this.categoriaService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('descricao') descricao: string): Promise<Categorias[]> {
    return this.categoriaService.findByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categorias): Promise<Categorias> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categorias): Promise<Categorias> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.categoriaService.delete(id);
  }

}