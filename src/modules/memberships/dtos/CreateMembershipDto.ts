import { Column } from 'typeorm';
import { MaxLength } from 'class-validator';

export class CreateMemberships {
  @Column()
  @MaxLength(20)
  public Name: string;

  @Column()
  @MaxLength(150)
  public Description: string;

  @Column()
  public Costo: number;

  @Column()
  public Duracion: number;
}
