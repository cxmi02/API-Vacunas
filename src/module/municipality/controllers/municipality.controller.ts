import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MunicipalityService } from '../service/municipality.service';
import { CreateMunicipalityDto } from '../dto/create-municipality.dto';
import { Municipality } from '../entities/municipality.entity';

@Controller('municipalities')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Post()
  async create(
    @Body() createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<Municipality> {
    return this.municipalityService.create(createMunicipalityDto);
  }

  @Get('by-department/:departmentName')
  async findByDepartmentName(
    @Param('departmentName') departmentName: string,
  ): Promise<any[]> {
    return this.municipalityService.findByDepartmentName(departmentName);
  }
}
