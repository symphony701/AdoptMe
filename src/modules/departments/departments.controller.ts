import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentsDto } from './dtos/create-departments.dto';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}
  @Get()
  async getDepartments() {
    return this.departmentsService.getDepartments();
  }
  @Post()
  async addDepartment(@Body() department: CreateDepartmentsDto) {
    return this.departmentsService.addDepartment(department);
  }
}
