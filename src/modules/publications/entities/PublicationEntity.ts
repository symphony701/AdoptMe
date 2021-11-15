import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MaxLength } from 'class-validator';
import { Pets } from '../../pets/entities/PetEntity';
import { AdoptionRequests } from "../../adoption-request/entities/AdoptionRequestEntity";

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

  @OneToMany(() => AdoptionRequests, (adoptionrequests) => adoptionrequests.publicationId)
  adoptionrequests: AdoptionRequests[];
}
