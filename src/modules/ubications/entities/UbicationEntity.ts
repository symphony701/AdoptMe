import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { MaxLength } from 'class-validator';

@Entity("ubications")
export class Ubications
{
  @PrimaryGeneratedColumn()
  public Id:number;

  @Column()
  @MaxLength(30)
  public Name:string;

  @Column()
  @MaxLength(100)
  public Description:string;


}