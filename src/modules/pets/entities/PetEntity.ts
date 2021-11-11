import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, MaxLength } from 'class-validator';

@Entity('pets')
export class Pets {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public Name: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public Type: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public Attention: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public Race: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public Age: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public IsAdopted: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public UserId: string;

  @Column()
  @IsEmpty()
  @MaxLength(20)
  public DateTime: string;
}
