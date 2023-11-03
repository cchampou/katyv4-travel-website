import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivityService {
  constructor(@InjectRepository(Activity) private activityRepository: Repository<Activity>) {}
  create(createActivityDto: CreateActivityDto) {
    const created = this.activityRepository.create({
      name: createActivityDto.name,
    });
    return this.activityRepository.save(created);
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: number) {
    return this.activityRepository.findOneBy({
      id,
    });
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.findOne(id);
    if (!activity) {
      throw new NotFoundException('Activity not found');
    }
    Object.assign(activity, updateActivityDto);
    await this.activityRepository.save(activity);
    return activity;
  }

  remove(id: number) {
    return this.activityRepository.delete({
      id,
    });
  }
}
