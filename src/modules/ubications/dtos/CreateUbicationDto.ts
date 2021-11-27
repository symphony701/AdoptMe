import { Column } from 'typeorm';
import { MaxLength } from 'class-validator';

export class CreateUbicationsDto {
  @Column()
  @MaxLength(30)
  public Name: string;

  @Column()
  @MaxLength(100)
  public Description: string;
}
