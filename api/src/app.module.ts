import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogoModule } from './jogo/jogo.module'; // Importe o JogoModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jogo',
      password: 'jogo',
      database: 'jogo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    JogoModule, // Adicione o JogoModule aos imports
  ],
})
export class AppModule {}
