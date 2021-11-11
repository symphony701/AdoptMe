import { Column } from 'typeorm';
import { MaxLength } from 'class-validator';

export class CreatePublication {
  @Column()
  @MaxLength(20)
  public DateTime: string;

  @Column()
  @MaxLength(100)
  public Comment: string;
}
