import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Municipality } from 'src/module/municipality/entities/municipality.entity';

@Schema()
export class Department extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], ref: Municipality.name })
  municipality: string[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
