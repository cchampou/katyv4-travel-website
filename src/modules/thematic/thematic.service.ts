import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThematicDto } from './dto/create-thematic.dto';
import { UpdateThematicDto } from './dto/update-thematic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Thematic } from './entities/thematic.entity';
import { Repository } from 'typeorm';

const kNotFoundError = 'Unable to find the given thematic';

@Injectable()
export class ThematicService {
  constructor(@InjectRepository(Thematic) private thematicRepository: Repository<Thematic>) {}
  async create(createThematicDto: CreateThematicDto) {
    const created = this.thematicRepository.create({
      name: createThematicDto.name,
    });
    await this.thematicRepository.save(created);

    return created;
  }

  async findAll() {
    return await this.thematicRepository.find();
  }

  async findOne(id: number) {
    const thematic = await this.thematicRepository.findOneBy({
      id,
    });

    if (!thematic) {
      throw new NotFoundException(kNotFoundError);
    }

    return thematic;
  }

  async update(id: number, updatedThematic: UpdateThematicDto) {
    const thematic = await this.findOne(id);

    if (!thematic) {
      throw new NotFoundException(kNotFoundError);
    }

    Object.assign(thematic, updatedThematic);
    await this.thematicRepository.save(thematic);

    return thematic;
  }

  async remove(id: number) {
    const thematic = await this.findOne(id);

    if (!thematic) {
      throw new NotFoundException(kNotFoundError);
    }

    const removed = await this.thematicRepository.remove(thematic);

    if (!removed) {
      throw new NotFoundException(kNotFoundError);
    }

    return null;
  }
}
