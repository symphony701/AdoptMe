import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MaxLength } from 'class-validator';
import { Users } from '../../users/entities/users_entity';

@Entity('districts')
export class Districts {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  @MaxLength(30)
  public Name: string;

  @Column()
  @MaxLength(100)
  public Description: string;

  // Cuando terminen la entidad Locations
  // @OneToMany(() => Locations, (locations) => locations.id)
  // public Locations: Locations[];
}
