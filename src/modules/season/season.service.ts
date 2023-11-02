import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Season } from './entities/season.entity';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

const kNotFoundError = 'Unable to find the given season';

@Injectable()
export class SeasonService {
  constructor(@InjectRepository(Season) private seasonRepository: Repository<Season>) {}
  async create(createSeasonDto: CreateSeasonDto) {
    const created = this.seasonRepository.create({
      name: createSeasonDto.name,
    });
    await this.seasonRepository.save(created);

    return created;
  }

  async findAll() {
    return await this.seasonRepository.find();
  }

  async findOne(id: number) {
    const season = await this.seasonRepository.findOneBy({
      id,
    });

    if (!season) {
      throw new NotFoundException(kNotFoundError);
    }

    return season;
  }

  async update(id: number, updatedSeason: UpdateSeasonDto) {
    const season = await this.findOne(id);

    if (!season) {
      throw new NotFoundException(kNotFoundError);
    }

    Object.assign(season, updatedSeason);
    await this.seasonRepository.save(season);

    return season;
  }

  async remove(id: number) {
    const season = await this.findOne(id);

    if (!season) {
      throw new NotFoundException(kNotFoundError);
    }

    const removed = await this.seasonRepository.remove(season);

    if (!removed) {
      throw new Error('Unable to remove the given season');
    }

    return null;
  }
}
