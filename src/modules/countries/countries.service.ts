import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountriesDto } from './dtos/create-countries-dto';
import { Countries } from './entities/countries_entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries)
    private readonly countriesRepository: Repository<Countries>,
  ) {}
  async getCountries() {
    return await this.countriesRepository.find();
  }
  async addCountry(country: CreateCountriesDto) {
    const data = this.countriesRepository.create(country);
    return this.countriesRepository.save(data);
  }
}
