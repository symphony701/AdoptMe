import { Module } from '@nestjs/common';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsRequests } from './entities/DetailsRequestEntity';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],

  imports: [TypeOrmModule.forFeature([DetailsRequests])],
})
export class DetailsModule {}
