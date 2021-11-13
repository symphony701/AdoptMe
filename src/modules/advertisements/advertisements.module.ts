import { Module } from '@nestjs/common';
import { AdvertisementsController } from './advertisements.controller';
import { AdvertisementsService } from './advertisements.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import {  Advertisements} from "./entities/AdvertisementsEntity"
@Module({
  controllers: [AdvertisementsController],
  providers: [AdvertisementsService],
  imports: [TypeOrmModule.forFeature([Advertisements])]

})
export class AdvertisementsModule {}
