import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ThematicService } from './thematic.service';
import { CreateThematicDto } from './dto/create-thematic.dto';
import { UpdateThematicDto } from './dto/update-thematic.dto';

@Controller('thematic')
export class ThematicController {
  constructor(private readonly thematicService: ThematicService) {}

  @Post()
  create(@Body() createThematicDto: CreateThematicDto) {
    return this.thematicService.create(createThematicDto);
  }

  @Get()
  findAll() {
    return this.thematicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thematicService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateThematicDto: UpdateThematicDto) {
    return this.thematicService.update(+id, updateThematicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thematicService.remove(+id);
  }
}
