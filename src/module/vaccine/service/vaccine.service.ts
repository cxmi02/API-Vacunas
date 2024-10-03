import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vaccine } from '../entities/vaccine.entity';
import { CreateVaccineDto } from '../dto/create-vaccine.dto';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel(Vaccine.name) private vaccineModel: Model<Vaccine>,
  ) {}

  async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    if (createVaccineDto.maxAge < 0) {
      throw new BadRequestException(
        'La edad máxima debe ser un número positivo.',
      );
    }

    const vaccine = new this.vaccineModel(createVaccineDto);
    return vaccine.save();
  }

  async isSuitableForChild(
    vaccineId: string,
    childAge: number,
  ): Promise<boolean> {
    const vaccine = await this.vaccineModel.findById(vaccineId).exec();
    if (!vaccine) {
      throw new BadRequestException('Vacuna no encontrada.');
    }
    return childAge <= vaccine.maxAge;
  }

  async findAll(): Promise<Vaccine[]> {
    return this.vaccineModel.find().exec();
  }

  async findOne(id: string): Promise<Vaccine> {
    return this.vaccineModel.findById(id).exec();
  }
}
