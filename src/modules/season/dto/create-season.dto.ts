import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
