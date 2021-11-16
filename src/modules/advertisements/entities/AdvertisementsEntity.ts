import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';
import { Users } from '../../users/entities/users_entity';

@Entity('advertisements')
export class Advertisements {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @MaxLength(30)
  public Titled: string;

  @Column()
  @MaxLength(100)
  public Description: string;

  @Column()
  @MaxLength(20)
  public Datetime: string;

  // @OneToMany(()=>Users,(users)=>users.advetisements)
}
