import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vaccine extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  maxAge: number;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);
