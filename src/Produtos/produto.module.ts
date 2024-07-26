import { TypeOrmModule } from "@nestjs/typeorm";

import { Produtos } from "./entities/produto.entity";
import { Module } from "@nestjs/common/decorators/modules";
import { ProdutosService } from "./service/produto.service";
import { ProdutoController } from "./controller/produto.controller";

@Module({

    imports: [TypeOrmModule.forFeature([Produtos])],
    providers: [ProdutosService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]

})
export class ProdutosModule {}