import { Countries } from 'src/modules/countries/entities/countries_entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('departments')
export class Departments {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'nvarchar', length: 225 })
  name: string;
  @ManyToOne(() => Countries, (Countries) => Countries.departments)
  @JoinColumn({ name: 'country_id' })
  country_id: number;
}
