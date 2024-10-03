import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { VaccineService } from '../service/vaccine.service';
import { CreateVaccineDto } from '../dto/create-vaccine.dto';
import { Vaccine } from '../entities/vaccine.entity';

@Controller('vaccines')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  async create(@Body() createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    return this.vaccineService.create(createVaccineDto);
  }

  @Get()
  async findAll(): Promise<Vaccine[]> {
    return this.vaccineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vaccine> {
    const vaccine = await this.vaccineService.findOne(id);
    if (!vaccine) {
      throw new BadRequestException('Vacuna no encontrada.');
    }
    return vaccine;
  }

  @Get(':id/suitable/:age')
  async isSuitableForChild(
    @Param('id') vaccineId: string,
    @Param('age') childAge: number,
  ): Promise<boolean> {
    return this.vaccineService.isSuitableForChild(vaccineId, childAge);
  }
}
