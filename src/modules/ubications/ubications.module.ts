import { Module } from '@nestjs/common';
import { UbicationsController } from './ubications.controller';
import { UbicationsService } from './ubications.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ubications } from "./entities/UbicationEntity";

@Module({
  controllers: [UbicationsController],
  providers: [UbicationsService],
  imports:[TypeOrmModule.forFeature([Ubications])],
})
export class UbicationsModule {}
