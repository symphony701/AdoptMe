import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublication } from './dtos/CreatePublicationDto';

@Controller('api/v1/publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}
  @Get()
  findAll() {
    return this.publicationsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.publicationsService.find(id);
  }

  @Post()
  insert(@Body() createPublication: CreatePublication) {
    return this.publicationsService.insert(createPublication);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.publicationsService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() createPublication: CreatePublication,
  ) {
    return this.publicationsService.update(id, createPublication);
  }
}
