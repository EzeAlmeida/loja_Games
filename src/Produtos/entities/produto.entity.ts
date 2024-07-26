
import { IsNotEmpty } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categorias } from "../../Categorias/entities/categoria.entity";


@Entity({name:"tb_produtos"})
export class Produtos{

@PrimaryGeneratedColumn()
id: number


@Transform(({ value }: TransformFnParams) => value?.trim()) // não aceitar espaço como valor
@IsNotEmpty() // não aceitar nada no titulo
@Column({length: 255, nullable: false}) // definindo tamanho e não aceitar valor nulo
titulo: string


@Transform(({ value }: TransformFnParams) => value?.trim()) // não aceitar espaço como valor
@IsNotEmpty() // não aceitar nada no titulo
@Column({length: 255, nullable: false}) // definindo tamanho e não aceitar valor nulo
plataforma: string

@Transform(({ value }: TransformFnParams) => value?.trim()) // não aceitar espaçoc omo valor
@IsNotEmpty() // não aceitar nada no titulo
@Column({length: 255, nullable: false}) // definindo tamanho e não aceitar valor nulo
imagem: string

@Transform(({ value }: TransformFnParams) => value?.trim()) // não aceitar espaço como valor
@IsNotEmpty() // não aceitar nada no titulo
@Column({type: 'decimal', precision: 10, scale: 2, nullable: false}) // definindo tamanho e não aceitar valor nulo
preco: number
// também defini que o Number é decimal, logo apos quantas casas e casas depois da virgula

@UpdateDateColumn() //Data e hora definida automaticamente
data: Date
    

    @ManyToOne(() => Categorias, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
    })

    Categoria: Categorias
}