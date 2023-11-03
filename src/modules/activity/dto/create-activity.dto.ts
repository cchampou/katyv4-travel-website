import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
