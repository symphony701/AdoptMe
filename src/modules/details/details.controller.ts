import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DetailsService } from './details.service';
import { CreateDetailsRequests } from './dtos/CreateDetailsRequestsDto';

@Controller('api/v1/details')
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Get()
  findAll() {
    return this.detailsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.detailsService.find(id);
  }

  @Post()
  insert(@Body() createDetailsRequests: CreateDetailsRequests) {
    return this.detailsService.insert(createDetailsRequests);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.detailsService.delete(id);
  }

  @Put('id')
  update(
    @Param('id') id: number,
    @Body() createDetailsRequests: CreateDetailsRequests,
  ) {
    return this.detailsService.update(id, createDetailsRequests);
  }
}
