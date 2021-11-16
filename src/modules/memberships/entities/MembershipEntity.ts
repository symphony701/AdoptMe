import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MaxLength } from 'class-validator';

@Entity('memberships')
export class Memberships {
  @PrimaryGeneratedColumn()
  public Id: number;

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
