import { Module } from '@nestjs/common';
import { AdoptionRequestController } from './adoption-request.controller';
import { AdoptionRequestService } from './adoption-request.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdoptionRequests } from "./entities/AdoptionRequestEntity";

@Module({
  controllers: [AdoptionRequestController],
  providers: [AdoptionRequestService],
  imports: [TypeOrmModule.forFeature([AdoptionRequests])]
})
export class AdoptionRequestModule {}
