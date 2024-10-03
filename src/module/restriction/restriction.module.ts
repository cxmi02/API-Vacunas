import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restriction, RestrictionSchema } from './entities/restriction.entity';
import { RestrictionService } from './service/restriction.service';
import { RestrictionController } from './controllers/restriction.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restriction.name, schema: RestrictionSchema },
    ]),
  ],
  controllers: [RestrictionController],
  providers: [RestrictionService],
  exports: [RestrictionService],
})
export class RestrictionModule {}
