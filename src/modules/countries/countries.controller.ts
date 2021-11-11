import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CreateCountriesDto } from './dtos/create-countries-dto';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Get()
  async getContries() {
    return this.countriesService.getCountries();
  }
  @Post()
  async addCountry(@Body() country: CreateCountriesDto) {
    return this.countriesService.addCountry(country);
  }
}
