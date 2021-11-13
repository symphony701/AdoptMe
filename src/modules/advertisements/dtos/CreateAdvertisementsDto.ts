import {Column} from 'typeorm';
import {MaxLength}  from "class-validator";

export class CreateAdvertisements
{
  @Column()
  @MaxLength(30)
  public Titled:string

  @Column()
  @MaxLength(100)
  public Description: string;

  @Column()
  @MaxLength(20)
  public Datetime: string;

}