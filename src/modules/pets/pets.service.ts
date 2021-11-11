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
  find(id: number): Promise<Pets> {
    return this.petsRepository.findOne(id);
  }
  insert(createPetsDto: CreatePetDto) {
    return this.petsRepository.insert(createPetsDto);
  }

  delete(id: number) {
    return this.petsRepository.delete(id);
  }
  update(id: number, pet: CreatePetDto) {
    return this.petsRepository.update(id, pet);
  }
}
