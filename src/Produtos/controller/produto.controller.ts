
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put } from "@nestjs/common";



import { ProdutosService } from "../service/produto.service";
import { Produtos } from "../entities/produto.entity";

@Controller("/produtos")
export class ProdutoController{
    
    constructor(private readonly produtoService: ProdutosService) { } //readonly só chama
    
    @Get()
        @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]>{
        return this.produtoService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id:number): Promise<Produtos>{
    return this.produtoService.findById(id);
}

@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
findByTitulo(@Param('titulo') titulo:string): Promise<Produtos[]> {
    return this.produtoService.findByTitulo(titulo);
}

@Put()
    @HttpCode(HttpStatus.OK) // Http Status 200
    update(@Body() postagem: Produtos): Promise<Produtos> {
        return this.produtoService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // Http Status 204
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id);
    }

}
