import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categorias } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService {
    categoriasRepository: any;
    constructor(
        @InjectRepository(Categorias)
        private categoriaRepository: Repository<Categorias>
    ) { }

    async findAll(): Promise<Categorias[]> {
        return await this.categoriaRepository.find({
            relations:{
                produto: true
            }
        });
    }

    async findById(id: number): Promise<Categorias> {

        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations:{
                produto: true
            }
        });

        if (!categoria)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return categoria;
    }

    async findByDescricao(descricao: string): Promise<Categorias[]> {
        return await this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations:{
                produto: true
            }
        })
    }

    async create(Categoria: Categorias): Promise<Categorias> {
        return await this.categoriasRepository.save(Categoria);
    }

    async update(categoria: Categorias): Promise<Categorias> {

        let buscaCategoria = await this.findById(categoria.id);

        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaCategoria = await this.findById(id);

        if (!buscaCategoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.delete(id);
    }
    }