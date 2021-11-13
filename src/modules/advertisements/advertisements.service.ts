import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Advertisements} from "./entities/AdvertisementsEntity";
import {CreateAdvertisements} from "./dtos/CreateAdvertisementsDto";

@Injectable()
export class AdvertisementsService {
  constructor(
    @InjectRepository(Advertisements)
    private readonly  advertisementsRepository:Repository<Advertisements>
  ) {}

  findAll():Promise<Advertisements[]>
  {
    return this.advertisementsRepository.find();
  }

  find(id:number): Promise<Advertisements>
  {
    return this.advertisementsRepository.findOne(id)
  }

  insert (createAdvertisements:CreateAdvertisements)
  {
    return this.advertisementsRepository.insert(createAdvertisements);
  }

  delete(id:number)
  {
    return this.advertisementsRepository.delete(id);
  }

  update(id:number,createAdvertisements:CreateAdvertisements)
  {
    return this.advertisementsRepository.update(id,createAdvertisements)
  }


}
