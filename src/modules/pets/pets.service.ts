import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from './entities/PetEntity';
import { CreatePetDto } from './dtos/CreatePetDto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
  ) {}

  findAll(): Promise<Pets[]> {
    return this.petsRepository.find();
  }

  insert(createPetsDto: CreatePetDto) {
    return this.petsRepository.insert(createPetsDto);
  }
}
