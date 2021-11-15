import { Column, ManyToOne } from "typeorm";
import { IsBoolean, MaxLength } from "class-validator";

export class CreateAdoptionRequests{
  @Column()
  public UserIdFrom: number;

  @Column()
  public useridAt: number;

  @Column()
  @MaxLength(100)
  public message: string;

  @Column()
  @MaxLength(100)
  public date: string;

  @Column()
  @IsBoolean()
  public approved: boolean;
}
