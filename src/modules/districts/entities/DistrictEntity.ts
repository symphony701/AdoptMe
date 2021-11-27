import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
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

  @ManyToOne(() => Users, (users) => users.id)
  public Users: Users;
}
