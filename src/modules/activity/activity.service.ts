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
    const created = this.activityRepository.create(createActivityDto);
    return this.activityRepository.save(created);
  }

  findAll() {
    return this.activityRepository.find({
      relations: ['address', 'address.city', 'address.city.country', 'seasons'],
    });
  }

  findOne(id: number) {
    return this.activityRepository.findOne({
      where: {
        id,
      },
      relations: ['address', 'address.city', 'address.city.country', 'seasons'],
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
