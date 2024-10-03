import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Child } from '../entities/child.entity';
import { CreateChildDto } from '../dto/create-child.dto';
import { RestrictionService } from 'src/module/restriction/service/restriction.service';
import { UpdateChildDto } from '../dto/update-child.dto';
import { VaccineService } from 'src/module/vaccine/service/vaccine.service';

@Injectable()
export class ChildService {
  constructor(
    @InjectModel(Child.name) private childModel: Model<Child>,
    private readonly restrictionService: RestrictionService,
    private vaccineService: VaccineService,
  ) {}

  async create(childDto: CreateChildDto): Promise<Child> {
    const child = new this.childModel(childDto);

    if (child.vaccine) {
      const isSuitable = await this.vaccineService.isSuitableForChild(
        child.vaccine,
        child.age,
      );
      if (!isSuitable) {
        throw new BadRequestException(
          'La vacuna no es adecuada para la edad del niño.',
        );
      }
    }

    return child.save();
  }

  async findAll(): Promise<Child[]> {
    return this.childModel
      .find()
      .populate('municipality')
      .populate('vaccine')
      .exec();
  }

  async findOne(id: string): Promise<Child> {
    return this.childModel
      .findById(id)
      .populate('municipality')
      .populate('vaccine')
      .exec();
  }

  async update(id: string, updateChildDto: UpdateChildDto): Promise<Child> {
    const child = await this.childModel
      .findById(id)
      .populate('municipality vaccine');
    if (!child) {
      throw new NotFoundException(`Child with id ${id} not found`);
    }

    if (updateChildDto.municipality) {
      const restriction = await this.restrictionService.findByChild(id);

      if (
        restriction &&
        restriction.municipality !== updateChildDto.municipality
      ) {
        throw new BadRequestException(
          `El niño ya está asociado a un municipio y no se puede asociar a otro.`,
        );
      }
    }

    Object.assign(child, updateChildDto);
    return child.save();
  }

  async remove(id: string): Promise<Child> {
    return this.childModel.findByIdAndDelete(id).exec();
  }

  async getAverageAgeByMunicipality(municipalityId: string): Promise<number> {
    const result = await this.childModel.aggregate([
      {
        $match: { municipality: municipalityId },
      },
      {
        $group: {
          _id: null,
          averageAge: { $avg: '$age' },
        },
      },
    ]);

    return result.length > 0 ? result[0].averageAge : 0;
  }
}
