import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publications } from './entities/PublicationEntity';
import { CreatePublication } from './dtos/CreatePublicationDto';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(Publications)
    private readonly publicationsRepository: Repository<Publications>,
  ) {}

  findAll(): Promise<Publications[]> {
    return this.publicationsRepository.find();
  }
  find(id: number): Promise<Publications> {
    return this.publicationsRepository.findOne(id);
  }
  insert(createPublication: CreatePublication) {
    return this.publicationsRepository.insert(createPublication);
  }
  delete(id: number) {
    return this.publicationsRepository.delete(id);
  }
  update(id: number, createPublication: CreatePublication) {
    return this.publicationsRepository.update(id, createPublication);
  }
}
