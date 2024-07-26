import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './Produtos/produto.module';
import { Produtos } from './Produtos/entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './Categorias/entities/categoria.entity';
import { CategoriasModule } from './Categorias/entities/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_gamestore',
      entities: [Produtos, Categorias],
      synchronize: true,
    }),
    ProdutosModule,
    CategoriasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
