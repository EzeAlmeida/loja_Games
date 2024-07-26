import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Categorias } from "./categoria.entity";
import { CategoriasController } from "../controller/categorias.controller";
import { CategoriaService } from "../service/categoria.service";

@Module({
    imports: [TypeOrmModule.forFeature([Categorias])],
    providers: [CategoriaService],
    controllers: [CategoriasController],
    exports: [TypeOrmModule]
})
export class CategoriasModule {}