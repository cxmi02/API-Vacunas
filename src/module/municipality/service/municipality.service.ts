import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Municipality } from '../entities/municipality.entity';
import { CreateMunicipalityDto } from '../dto/create-municipality.dto';
import { Department } from 'src/module/department/entities/department.entity';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectModel(Municipality.name)
    private municipalityModel: Model<Municipality>,
    @InjectModel(Department.name) private departmentModel: Model<Department>,
  ) {}

  async create(
    createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<Municipality> {
    const municipality = new this.municipalityModel(createMunicipalityDto);
    return municipality.save();
  }

  async findByDepartmentName(departmentName: string): Promise<any[]> {
    const department = await this.departmentModel.findOne({
      name: departmentName,
    });

    if (!department) {
      return [];
    }

    return this.municipalityModel
      .find({ department: department._id })
      .populate('department', 'name')
      .exec();
  }
}
