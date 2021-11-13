import { Controller,
Body,
Delete,
Get,
Param,
Post,
Put} from '@nestjs/common';

import {AdvertisementsService} from'./advertisements.service';
import {CreateAdvertisements} from'./dtos/CreateAdvertisementsDto';

@Controller('advertisements')
export class AdvertisementsController {
  constructor(private readonly  advertisementsService:AdvertisementsService) {
  }
  @Get()
  findAll()
  {
    return this.advertisementsService.findAll();
  }

  @Get(':id')
  find(@Param('id')id:number)
  {
    return this.advertisementsService.find(id)
  }

  @Post()
  insert(@Body() createAdvertisements:CreateAdvertisements)
  {
    return this.advertisementsService.insert(createAdvertisements);
  }

  @Delete(':id')
  delete(@Param("id")id:number)
  {
    return this.advertisementsService.delete(id)
  }

  @Put(':id')
  update(@Param('id')id:number,
         @Body()createadvertisements:CreateAdvertisements,)
  {
    return this.advertisementsService.update(id,createadvertisements)
  }

}