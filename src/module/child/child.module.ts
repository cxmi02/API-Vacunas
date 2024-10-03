import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Child, ChildSchema } from './entities/child.entity';
import { ChildService } from './service/child.service';
import { ChildController } from './controllers/child.controller';
import { RestrictionModule } from '../restriction/restriction.module';
import { VaccineModule } from '../vaccine/vaccine.module';
import { Vaccine, VaccineSchema } from '../vaccine/entities/vaccine.entity';
import {
  Municipality,
  MunicipalitySchema,
} from '../municipality/entities/municipality.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Child.name, schema: ChildSchema },
      { name: Vaccine.name, schema: VaccineSchema },
      { name: Municipality.name, schema: MunicipalitySchema },
    ]),
    VaccineModule,
    RestrictionModule,
  ],
  controllers: [ChildController],
  providers: [ChildService],
  exports: [ChildService],
})
export class ChildModule {}
