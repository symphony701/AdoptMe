import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Ubications } from "./entities/UbicationEntity";
import { Repository } from "typeorm";
import { CreateUbicationsDto } from "./dtos/CreateUbicationDto";

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubications)
    private readonly ubicationsRepository:Repository<Ubications>,
  ){}

  findAll():Promise<Ubications[]>
  {
    return this.ubicationsRepository.find();
  }

  find(id:number):Promise<Ubications>
  {
    return this.ubicationsRepository.findOne(id);
  }

  insert(createUbicationDyo:CreateUbicationsDto)
  {
    return this.ubicationsRepository.insert(createUbicationDyo);
  }
  delete(id:number)
  {
    return this.ubicationsRepository.delete(id)
  }

  update( id:number,ubications:CreateUbicationsDto)
  {
    return this.ubicationsRepository.update(id,ubications);
  }


}

