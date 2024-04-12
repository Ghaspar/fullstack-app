import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jogo } from './jogo.entity';
import { CreateJogoDto, UpdateJogoDto } from './dto/jogo.dto';



@Injectable()
export class JogoService {
  constructor(
    @InjectRepository(Jogo)
    private jogoRepository: Repository<Jogo>,
  ) {}

  async findAll(): Promise<Jogo[]> {
    const jogo = await this.jogoRepository.find();
    console.log('Entrou no service FindAll \n', jogo);
    return jogo;
  }
 
 
  async findOne(id: number): Promise<Jogo> {
    const jogo = await this.jogoRepository.findOne({ where: { id } });
    if (!jogo) {
      throw new NotFoundException('Jogo não encontrado');
    }
    console.log('Entrou no service FindOne \n', JSON.stringify(jogo, null, 2));
    return jogo;
  }
  
  
  

  async create(createJogoDto: CreateJogoDto): Promise<Jogo> {
    const jogo = this.jogoRepository.create(createJogoDto);
    jogo.pontos_da_rodada_jogada = this.calcularPontosDaRodada(jogo);
    console.log('Entrou no service create \n', JSON.stringify(jogo, null, 2));
    return this.jogoRepository.save(jogo);
  }

  async update(id: number, updateJogoDto: UpdateJogoDto): Promise<Jogo> {
    const jogo = await this.findOne(id);
    this.jogoRepository.merge(jogo, updateJogoDto);
    jogo.pontos_da_rodada_jogada = this.calcularPontosDaRodada(jogo);
    console.log('Entrou no service Update \n', JSON.stringify(jogo, null, 2));
    return this.jogoRepository.save(jogo);
  }

  async remove(id: number): Promise<void> {
    const jogo = await this.findOne(id);
    console.log('Entrou no service Remove \n', JSON.stringify(jogo, null, 2));
    await this.jogoRepository.remove(jogo);
  }

  private calcularPontosDaRodada(jogo: Jogo): number {
    // Implemente a lógica de cálculo dos pontos da rodada jogada aqui
    // Utilize jogo.valor_por_rodada, jogo.peso_do_valor e a lógica de cálculo fornecida
    return 0; // Altere para retornar o valor calculado
  }
}
