import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MunicipalityService } from './service/municipality.service';
import {
  Municipality,
  MunicipalitySchema,
} from './entities/municipality.entity';
import {
  Department,
  DepartmentSchema,
} from '../department/entities/department.entity';
import { MunicipalityController } from './controllers/municipality.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Municipality.name, schema: MunicipalitySchema },
    ]),
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
  controllers: [MunicipalityController],
  providers: [MunicipalityService],
})
export class MunicipalityModule {}
