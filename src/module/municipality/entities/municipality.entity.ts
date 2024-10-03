import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/module/department/entities/department.entity';

@Schema()
export class Municipality extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, ref: Department.name })
  departamento: string;
}

export const MunicipalitySchema = SchemaFactory.createForClass(Municipality);
