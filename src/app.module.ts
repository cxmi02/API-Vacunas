import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './libs/persistence/db-config';
import { ChildModule } from './module/child/child.module';
import { DepartmentModule } from './module/department/department.module';
import { MunicipalityModule } from './module/municipality/municipality.module';
import { RestrictionModule } from './module/restriction/restriction.module';
import { VaccineModule } from './module/vaccine/vaccine.module';
import { PersistenceModule } from './libs/persistence';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    DepartmentModule,
    MunicipalityModule,
    ChildModule,
    RestrictionModule,
    VaccineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
