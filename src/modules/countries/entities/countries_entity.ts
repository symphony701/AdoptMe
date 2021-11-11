import { Departments } from 'src/modules/departments/entities/departments_entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('countries')
export class Countries {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'nvarchar', length: 225 })
  name: string;
  @OneToMany(() => Departments, (Departments) => Departments.country_id)
  departments: Departments[];
}
