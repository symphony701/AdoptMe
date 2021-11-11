import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';
import { Pets } from '../../pets/entities/PetEntity';

@Entity('publications')
export class Publications {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  @MaxLength(20)
  public DateTime: string;

  @Column()
  @MaxLength(100)
  public Comment: string;

  @OneToMany(() => Pets, (pets) => pets.publication)
  pets: Pets[];
}
