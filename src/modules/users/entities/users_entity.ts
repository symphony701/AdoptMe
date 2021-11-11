import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'nvarchar', length: 225 })
  type: string;
  @Column({ type: 'nvarchar', length: 225 })
  pass: string;
  @Column({ type: 'nvarchar', length: 225 })
  ruc: string;
  @Column({ type: 'nvarchar', length: 225 })
  dni: string;
  @Column({ type: 'nvarchar', length: 225 })
  phone: string;
  @Column({ type: 'nvarchar', length: 225 })
  email: string;
  @Column({ type: 'nvarchar', length: 225 })
  name: string;
  @Column({ type: 'nvarchar', length: 225 })
  lastname: string;
  @JoinColumn({ name: 'ubication_id' })
  ubication_id: number;
}
