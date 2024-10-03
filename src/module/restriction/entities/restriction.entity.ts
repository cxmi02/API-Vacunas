import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Child } from 'src/module/child/entities/child.entity';
import { Municipality } from 'src/module/municipality/entities/municipality.entity';

@Schema()
export class Restriction extends Document {
  @Prop({ type: String, ref: Child.name, required: true })
  child: string;

  @Prop({ type: String, ref: Municipality.name, required: true })
  municipality: string;

  @Prop({ default: false })
  active: boolean;
}

export const RestrictionSchema = SchemaFactory.createForClass(Restriction);
