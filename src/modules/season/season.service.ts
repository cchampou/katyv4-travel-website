import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Season } from './entities/season.entity';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

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

    return season;
  }

  async update(id: number, { name }: UpdateSeasonDto) {
    const season = await this.findOne(id);
    season.name = name;
    await this.seasonRepository.save(season);

    return season;
  }

  async remove(id: number) {
    const season = await this.findOne(id);
    await this.seasonRepository.remove(season);

    return null;
  }
}
