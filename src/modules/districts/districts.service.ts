import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Districts } from './entities/DistrictEntity';
import { CreateDistrictsDto } from './dtos/CreateDistrictDto';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(Districts)
    private readonly districtsRepository: Repository<Districts>,
  ) {}

  findAll(): Promise<Districts[]> {
    return this.districtsRepository.find();
  }
  find(id: number): Promise<Districts> {
    return this.districtsRepository.findOne(id);
  }
  insert(createDistrictsDto: CreateDistrictsDto) {
    return this.districtsRepository.insert(createDistrictsDto);
  }

  delete(id: number) {
    return this.districtsRepository.delete(id);
  }
  update(id: number, district: CreateDistrictsDto) {
    return this.districtsRepository.update(id, district);
  }
}
