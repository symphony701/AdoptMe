import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memberships } from './entities/MembershipEntity';
import { CreateMemberships } from './dtos/CreateMembershipDto';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectRepository(Memberships)
    private readonly membershipsRepository: Repository<Memberships>,
  ) {}

  findAll(): Promise<Memberships[]> {
    return this.membershipsRepository.find();
  }
  find(id: number): Promise<Memberships> {
    return this.membershipsRepository.findOne(id);
  }
  insert(createMemberships: CreateMemberships) {
    return this.membershipsRepository.insert(createMemberships);
  }
  delete(id: number) {
    return this.membershipsRepository.delete(id);
  }
  update(id: number, createMemberships: CreateMemberships) {
    return this.membershipsRepository.update(id, createMemberships);
  }
}
