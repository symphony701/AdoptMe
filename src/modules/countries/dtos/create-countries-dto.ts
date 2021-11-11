import { IsString } from 'class-validator';

export class CreateCountriesDto {
  @IsString()
  name: string;
}
