import { Controller, Get, Post } from '@nestjs/common';
import { CreatePetDto } from './dtos/CreatePetDto';
import { PetsService } from './pets.service';

@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Post()
  insert(createPetDto: CreatePetDto) {
    return this.petsService.insert(createPetDto);
  }
}
