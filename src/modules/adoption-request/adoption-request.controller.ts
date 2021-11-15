import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdvertisementsService } from "../advertisements/advertisements.service";
import { AdoptionRequestService } from "./adoption-request.service";
import { CreateAdoptionRequests } from "./dtos/CreateAdoptionRequestsDto";

@Controller('api/v1/adoption-request')
export class AdoptionRequestController {
  constructor(private readonly  adoptionRequestService:AdoptionRequestService) {
  }

  @Get()
  findAll(){
    return this.adoptionRequestService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number){
    return this.adoptionRequestService.find(id);
  }

  @Post()
  insert(@Body() createAdoptionRequests: CreateAdoptionRequests)
  {
   return this.adoptionRequestService.insert(createAdoptionRequests) ;
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.adoptionRequestService.delete(id);
  }

  @Put('id')
  update(
    @Param('id') id: number,
    @Body() createAdoptionRequests: CreateAdoptionRequests){
    return this.adoptionRequestService.update(id, createAdoptionRequests);
  }
}
