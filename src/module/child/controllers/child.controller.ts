import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ChildService } from '../service/child.service';
import { Child } from '../entities/child.entity';
import { CreateChildDto } from '../dto/create-child.dto';
import { UpdateChildDto } from '../dto/update-child.dto';

@Controller('children')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  async create(@Body() createChildDto: CreateChildDto): Promise<Child> {
    return this.childService.create(createChildDto);
  }

  @Get()
  async findAll(): Promise<Child[]> {
    return this.childService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Child> {
    return this.childService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChildDto: UpdateChildDto,
  ): Promise<Child> {
    return this.childService.update(id, updateChildDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Child> {
    return this.childService.remove(id);
  }

  @Get('average-age/:municipalityId')
  async getAverageAge(
    @Param('municipalityId') municipalityId: string,
  ): Promise<{ averageAge: number }> {
    const averageAge =
      await this.childService.getAverageAgeByMunicipality(municipalityId);
    return { averageAge };
  }
}
