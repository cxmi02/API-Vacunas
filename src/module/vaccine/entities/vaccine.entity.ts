import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Child } from 'src/module/child/entities/child.entity';

@Schema()
export class Vaccine extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  maxAge: number;

  @Prop({ type: [String], ref: Child.name })
  child: string[];
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);
