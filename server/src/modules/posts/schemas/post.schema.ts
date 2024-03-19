import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  text: string;

  @Prop()
  img: string;

  @Prop({ default: [] })
  likes: number[];

  @Prop()
  replies: number[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
