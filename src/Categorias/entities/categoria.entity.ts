
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "../../Produtos/entities/produto.entity";
import { IsNotEmpty } from "class-validator";


@Entity({name: "tb_categorias"})
export class Categorias {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string
    

    @OneToMany(() => Produtos, (produtos) => produtos.Categoria)
   produtos: Produtos[]
    produto: any;
}