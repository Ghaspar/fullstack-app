import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { JogoService } from './jogo.service';
//import { CreateJogoDto, UpdateJogoDto } from './dto/jogo.dto';
import { CreateJogoDto, UpdateJogoDto} from './dto/jogo.dto';

@Controller('jogo')
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Get()
  findAll() {
    return this.jogoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jogoService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogoService.create(createJogoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogoService.update(parseInt(id, 10), updateJogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogoService.remove(parseInt(id, 10));
  }
}
