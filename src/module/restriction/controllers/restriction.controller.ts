import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateRestrictionDto } from '../dto/create-restriction.dto';
import { RestrictionService } from '../service/restriction.service';
import { Restriction } from '../entities/restriction.entity';

@Controller('restrictions')
export class RestrictionController {
  constructor(private readonly restrictionService: RestrictionService) {}

  @Post()
  async create(@Body() createRestrictionDto: CreateRestrictionDto) {
    const { child, municipality } = createRestrictionDto;
    return this.restrictionService.create(child, municipality);
  }

  @Get(':childId')
  async findByChild(
    @Param('childId') childId: string,
  ): Promise<Restriction | null> {
    const restriction = await this.restrictionService.findByChild(childId);
    if (!restriction) {
      throw new NotFoundException(
        `No restrictions found for child with ID ${childId}`,
      );
    }
    return restriction;
  }
}
