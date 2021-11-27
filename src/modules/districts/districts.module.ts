import { Module } from '@nestjs/common';
import { DistrictsController } from './districts.controller';
import { DistrictsService } from './districts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Districts } from './entities/DistrictEntity';

@Module({
  controllers: [DistrictsController],
  providers: [DistrictsService],
  imports: [TypeOrmModule.forFeature([Districts])],
})
export class DistrictsModule {}
