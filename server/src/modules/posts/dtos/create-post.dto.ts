import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  img?: string;

  @IsOptional()
  likes?: number[];

  @IsOptional()
  @IsArray()
  replies?: number[];
}
