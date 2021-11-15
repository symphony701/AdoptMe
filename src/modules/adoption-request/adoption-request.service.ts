import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdoptionRequests } from "./entities/AdoptionRequestEntity";
import { CreateAdoptionRequests } from "./dtos/CreateAdoptionRequestsDto";

@Injectable()
export class AdoptionRequestService {
  constructor(
    @InjectRepository(AdoptionRequests)
    private readonly adoptionRequestsRepository: Repository<AdoptionRequests>
  ) {}

  findAll(): Promise<AdoptionRequests[]>
  {
    return this.adoptionRequestsRepository.find();
  }

  find(id: number): Promise<AdoptionRequests>
  {
    return this.adoptionRequestsRepository.findOne(id);
  }

  insert(createAdoptionRequests: CreateAdoptionRequests)
  {
    return this.adoptionRequestsRepository.insert(createAdoptionRequests);
  }
  delete(id: number)
  {
    return this.adoptionRequestsRepository.delete(id);
  }

  update(id: number, createAdoptionRequests: CreateAdoptionRequests)
  {
    return this.adoptionRequestsRepository.update(id, createAdoptionRequests)
  }
}
