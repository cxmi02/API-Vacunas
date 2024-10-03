import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaccine, VaccineSchema } from './entities/vaccine.entity';
import { VaccineService } from './service/vaccine.service';
import { VaccineController } from './controllers/vaccine.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vaccine.name, schema: VaccineSchema }]),
  ],
  controllers: [VaccineController],
  providers: [VaccineService],
  exports: [VaccineService],
})
export class VaccineModule {}
