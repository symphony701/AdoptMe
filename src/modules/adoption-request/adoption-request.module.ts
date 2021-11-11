import { Module } from '@nestjs/common';
import { AdoptionRequestController } from './adoption-request.controller';
import { AdoptionRequestService } from './adoption-request.service';

@Module({
  controllers: [AdoptionRequestController],
  providers: [AdoptionRequestService]
})
export class AdoptionRequestModule {}
