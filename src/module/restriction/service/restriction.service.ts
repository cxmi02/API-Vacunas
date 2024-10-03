import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restriction } from '../entities/restriction.entity';

@Injectable()
export class RestrictionService {
  constructor(
    @InjectModel(Restriction.name) private restrictionModel: Model<Restriction>,
  ) {}

  async create(childId: string, municipalityId: string): Promise<Restriction> {
    const existingRestriction = await this.restrictionModel.findOne({
      child: childId,
    });
    if (existingRestriction) {
      existingRestriction.municipality = municipalityId;
      return existingRestriction.save();
    } else {
      const restriction = new this.restrictionModel({
        child: childId,
        municipality: municipalityId,
      });
      return restriction.save();
    }
  }

  async findByChild(childId: string): Promise<Restriction | null> {
    return this.restrictionModel.findOne({ child: childId }).exec();
  }
}
