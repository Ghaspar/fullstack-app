import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Jogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome_do_jogo: string;

  @Column()
  data: Date;

  @Column({ type: 'numeric' })
  valor_por_rodada: number;

  @Column({ type: 'numeric' })
  peso_do_valor: number;

  @Column({ type: 'integer' })
  pontos_da_rodada_jogada: number;

  @Column({ type: 'text' })
  descricao: string;
}
