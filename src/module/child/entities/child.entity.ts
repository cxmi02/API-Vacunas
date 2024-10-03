import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Municipality } from 'src/module/municipality/entities/municipality.entity';
import { Vaccine } from 'src/module/vaccine/entities/vaccine.entity';

@Schema()
export class Child extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, unique: true })
  idCard: string;

  @Prop({ type: String, ref: Municipality.name })
  municipality: string;

  @Prop({ type: String, ref: Vaccine.name })
  vaccine?: string;
}

export const ChildSchema = SchemaFactory.createForClass(Child);
