import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogoController } from './jogo.controller'; // Importe o JogoController
import { JogoService } from './jogo.service'; // Importe o JogoService
import { Jogo } from './jogo.entity'; // Importe a entidade Jogo

@Module({
  imports: [TypeOrmModule.forFeature([Jogo])],
  controllers: [JogoController], // Adicione o JogoController aos controllers do módulo
  providers: [JogoService], // Adicione o JogoService aos providers do módulo
})
export class JogoModule {}
