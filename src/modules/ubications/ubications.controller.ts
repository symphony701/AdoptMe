import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UbicationsService } from "./ubications.service";
import { CreateUbicationsDto } from "./dtos/CreateUbicationDto";

@Controller('ubications')
export class UbicationsController {
  constructor(private readonly ubicationsService:UbicationsService)
  {

  }

  @Get()
  findAll()
  {
    return this.ubicationsService.findAll();
  }

  @Get(':id')
  find(@Param('id')id:number)
  {
    return this.ubicationsService.find(id);
  }

  @Post()
  insert(@Body() createUbicationsDto:CreateUbicationsDto)
  {
    return this.ubicationsService.insert(createUbicationsDto);
  }

  @Delete(':id')
  delete(@Param('id')id:number)
  {
    return this.ubicationsService.delete(id);
  }

  @Put(':id')
  update(@Param('id')id:number,
         @Body()createUbicationDto:CreateUbicationsDto,)
  {
    return this.ubicationsService.update(id,createUbicationDto);
  }



}
