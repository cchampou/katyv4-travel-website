import { IsNotEmpty, IsString } from 'class-validator';

export class CreateThematicDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
