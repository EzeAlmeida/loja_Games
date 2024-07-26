import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

import { Produtos } from "../entities/produto.entity";

@Injectable()
export class ProdutosService {

    constructor(
        @InjectRepository(Produtos)
        private produtoRepository: Repository<Produtos>
    ) { }
    async findAll(): Promise<Produtos[]> {

        return await this.produtoRepository.find({
            relations:{
                Categoria: true
            }
        });
    }

    async findById(id: number): Promise<Produtos>{

        let buscaPostagem = await this.produtoRepository.findOne({
            where:{
                id
            },
            relations:{
                Categoria: true
            }

        })

if(!buscaPostagem)
throw new HttpException('A Postagem não foi encontrada!' , HttpStatus.NOT_FOUND)



return buscaPostagem
    }
    async findByTitulo(titulo: string): Promise<Produtos[]>{

        return await this.produtoRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                Categoria: true
            }

})
    }

async update(produto: Produtos): Promise<Produtos>{

let buscaProduto = await this.findById(produto.id);

if(!buscaProduto || !produto.id)
    throw new HttpException('A Postagem não foi encontrada!', HttpStatus.NOT_FOUND);

return await this.produtoRepository.save(produto);


}
async delete(id: number): Promise<DeleteResult>{

    let buscaPostagem = await this.findById(id)

    if(!buscaPostagem)
        throw new HttpException('O produto não foi encontrado!', HttpStatus.NOT_FOUND);

    return await this.produtoRepository.delete(id);

}

}
