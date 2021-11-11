import { IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  type: string;
  @IsString()
  pass: string;
  @IsString()
  ruc: string;
  @IsString()
  dni: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  lastname: string;
}
