import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogoModule } from './jogo/jogo.module'; // Importe o JogoModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // Sincronizando com container docker do banco
      host: 'banco',
      port: 5432,
      username: 'jogo',
      password: 'jogo',
      database: 'jogo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // TODO: resolver situação, onde, colocando para sincronizar, ele lista alguns erros no banco de dados, não é impeditivo para seguir em prod, mas deve ser revisto na etapa de code review.
      synchronize: false,

    }),
    JogoModule, // Adicione o JogoModule aos imports
  ],
})
export class AppModule {}
