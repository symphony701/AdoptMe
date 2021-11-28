import { Column, ManyToOne } from "typeorm";

export class CreateDetailsRequests{
  @Column()
  public detailsPet: string;


}
