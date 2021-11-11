import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePetDto } from './dtos/CreatePetDto';
import { PetsService } from './pets.service';

@Controller('/api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.petsService.find(id);
  }

  @Post()
  insert(@Body() createPetDto: CreatePetDto) {
    return this.petsService.insert(createPetDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.petsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() createPetDto: CreatePetDto) {
    return this.petsService.update(id, createPetDto);
  }

}
