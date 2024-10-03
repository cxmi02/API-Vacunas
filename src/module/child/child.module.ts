import { Module } from '@nestjs/common';
import { ChildService } from './service/child.service';
import { ChildController } from './controllers/child.controller';

@Module({
  controllers: [ChildController],
  providers: [ChildService],
})
export class ChildModule {}
