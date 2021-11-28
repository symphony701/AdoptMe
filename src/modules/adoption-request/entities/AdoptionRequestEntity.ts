import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsBoolean, IsInt, Max, MaxLength, Min } from 'class-validator';
import { Publications } from '../../publications/entities/PublicationEntity';
import { DetailsRequests } from '../../details/entities/DetailsRequestEntity';

@Entity('adoptionrequests')
export class AdoptionRequests {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public UserIdFrom: number;

  @Column()
  public useridAt: number;

  @Column()
  @MaxLength(100)
  public message: string;

  @ManyToOne(
    () => Publications,
    (publications) => publications.adoptionrequests,
  )
  publicationId: Publications;

  @Column()
  @MaxLength(100)
  public date: string;

  @Column()
  @IsBoolean()
  public approved: boolean;

  @OneToOne(() => DetailsRequests,
    details => details.adoption) // specify inverse side as a second parameter

  details: DetailsRequests;
}
