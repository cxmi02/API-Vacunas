import { Module } from '@nestjs/common';
import { RestrictionController } from './controllers/restriction.controller';
import { RestrictionService } from './service/restriction.service';

@Module({
  controllers: [RestrictionController],
  providers: [RestrictionService],
})
export class RestrictionModule {}
