import { Module } from '@nestjs/common';
import { VaccineController } from './controllers/vaccine.controller';
import { VaccineService } from './service/vaccine.service';

@Module({
  controllers: [VaccineController],
  providers: [VaccineService],
})
export class VaccineModule {}
