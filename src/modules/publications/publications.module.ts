import { Module } from '@nestjs/common';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publications } from './entities/PublicationEntity';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
  imports: [TypeOrmModule.forFeature([Publications])],
})
export class PublicationsModule {}
