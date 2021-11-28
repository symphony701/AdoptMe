import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictsDto } from './dtos/CreateDistrictDto';

@Controller('/api/v1/districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Get()
  findAll() {
    return this.districtsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.districtsService.find(id);
  }

  @Post()
  insert(@Body() createDistrictsDto: CreateDistrictsDto) {
    return this.districtsService.insert(createDistrictsDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.districtsService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() createDistrictsDto: CreateDistrictsDto,
  ) {
    return this.districtsService.update(id, createDistrictsDto);
  }
}
