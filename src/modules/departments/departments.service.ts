import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentsDto } from './dtos/create-departments.dto';
import { Departments } from './entities/departments_entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private readonly departmentsRepository: Repository<Departments>,
  ) {}
  async getDepartments() {
    return await this.departmentsRepository.find();
  }
  async addDepartment(department: CreateDepartmentsDto) {
    const data = await this.departmentsRepository.create(department);
    return await this.departmentsRepository.save(data);
  }
}
