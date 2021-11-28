import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetailsRequests } from './entities/DetailsRequestEntity';
import { CreateDetailsRequests } from './dtos/CreateDetailsRequestsDto';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(DetailsRequests)
    private readonly detailRequestsRepository: Repository<DetailsRequests>,
  ) {}

  findAll(): Promise<DetailsRequests[]> {
    return this.detailRequestsRepository.find();
  }

  find(id: number): Promise<DetailsRequests> {
    return this.detailRequestsRepository.findOne(id);
  }

  insert(createDetailsRequests: CreateDetailsRequests) {
    return this.detailRequestsRepository.insert(createDetailsRequests);
  }
  delete(id: number) {
    return this.detailRequestsRepository.delete(id);
  }

  update(id: number, createDetailsRequests: CreateDetailsRequests) {
    return this.detailRequestsRepository.update(id, createDetailsRequests);
  }
}
