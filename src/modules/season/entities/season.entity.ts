import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Activity } from '../../activity/entities/activity.entity';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @ManyToMany(() => Activity, (activity) => activity.seasons)
  activities: Relation<Activity[]>;
}
