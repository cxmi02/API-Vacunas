import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './libs/persistence/db-config';
import { ChildModule } from './module/child/child.module';
import { DepartmentModule } from './module/department/department.module';
import { MunicipalityModule } from './module/municipality/municipality.module';
import { RestrictionModule } from './module/restriction/restriction.module';
import { VaccineModule } from './module/vaccine/vaccine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    ChildModule,
    DepartmentModule,
    MunicipalityModule,
    RestrictionModule,
    VaccineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
