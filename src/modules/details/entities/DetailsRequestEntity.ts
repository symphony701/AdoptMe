import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MaxLength } from 'class-validator';
import { AdoptionRequests } from '../../adoption-request/entities/AdoptionRequestEntity';
import { Users } from '../../users/entities/users_entity';
import { Pets } from '../../pets/entities/PetEntity';
@Entity('detailsrequests')
export class DetailsRequests {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  @MaxLength(250)
  public detailsPet: string;

  @OneToOne(() => AdoptionRequests, (adoption) => adoption.details)
  @JoinColumn() // specify inverse side as a second parameter
  adoption: AdoptionRequests;

  @ManyToOne(() => Users, (fromId) => fromId.requestsfrom)
  fromId: Users;

  @ManyToOne(() => Users, (toId) => toId.requeststo)
  toId: Users;

  @ManyToOne(() => Pets, (petId) => petId.requests)
  petId: Pets;
}
