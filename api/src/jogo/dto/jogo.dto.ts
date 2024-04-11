// src/jogo/dto/jogo.dto.ts
import { IsNotEmpty, IsDate, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateJogoDto {
  @IsNotEmpty()
  @IsString()
  nome_do_jogo: string;

  @IsNotEmpty()
  @IsDate()
  data: Date;

  @IsNotEmpty()
  @IsNumber()
  valor_por_rodada: number;

  @IsNotEmpty()
  @IsNumber()
  peso_do_valor: number;

  @IsNotEmpty()
  @IsNumber()
  pontos_da_rodada_jogada: number;

  @IsOptional()
  @IsString()
  descricao?: string;
}

import { PartialType } from '@nestjs/swagger';

export class UpdateJogoDto extends PartialType(CreateJogoDto) {}
