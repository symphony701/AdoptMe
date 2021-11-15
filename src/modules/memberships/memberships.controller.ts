import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MembershipsService } from "./memberships.service";
import { CreateMemberships } from "./dtos/CreateMembershipDto";

@Controller('api/v1/memberships')
export class MembershipsController {
  constructor(private readonly membershipsService: MembershipsService) {}
  @Get()
  findAll() {
    return this.membershipsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.membershipsService.find(id);
  }

  @Post()
  insert(@Body() createMemberships: CreateMemberships) {
    return this.membershipsService.insert(createMemberships);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.membershipsService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() createMemberships: CreateMemberships,
  ) {
    return this.membershipsService.update(id, createMemberships);
  }
}
