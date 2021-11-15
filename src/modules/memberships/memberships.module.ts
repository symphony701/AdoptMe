import { Module } from '@nestjs/common';
import { MembershipsController } from './memberships.controller';
import { MembershipsService } from './memberships.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Memberships } from "./entities/MembershipEntity";

@Module({
  controllers: [MembershipsController],
  providers: [MembershipsService],
  imports: [TypeOrmModule.forFeature([Memberships])]
})
export class MembershipsModule {}
