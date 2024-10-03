import { Module } from '@nestjs/common';
import { MunicipalityController } from './controllers/municipality.controller';
import { MunicipalityService } from './service/municipality.service';

@Module({
  controllers: [MunicipalityController],
  providers: [MunicipalityService],
})
export class MunicipalityModule {}
