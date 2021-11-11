import { Column } from 'typeorm';
import { IsBoolean, IsEmpty, IsInt, Max, MaxLength, Min } from "class-validator";

export class CreatePetDto {
  @Column()
  @MaxLength(20)
  public Name: string;

  @Column()
  @MaxLength(20)
  public Type: string;

  @Column()
  @MaxLength(20)
  public Attention: string;

  @Column()
  @MaxLength(20)
  public Race: string;

  @Column()
  @IsInt()
  @Min(0)
  @Max(10)
  public Age: number;

  @Column()
  @IsBoolean()
  public IsAdopted: boolean;

  @Column()
  @IsInt()
  @Min(0)
  @Max(10)
  public UserId: number;

  @Column()
  @MaxLength(20)
  public DateTime: string;
}
