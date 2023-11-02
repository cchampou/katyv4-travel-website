import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private cityRepository: Repository<City>) {}
  async create(createCityDto: CreateCityDto) {
    const createdCity = this.cityRepository.create(createCityDto);
    await this.cityRepository.save(createdCity);
    return createdCity;
  }

  async findAll() {
    const allCities = await this.cityRepository.find();

    return allCities;
  }

  async findOne(id: number) {
    const city = await this.cityRepository.findOneBy({
      id,
    });

    return city;
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    const city = await this.findOne(id);
    city.name = updateCityDto.name;
    await this.cityRepository.save(city);

    return city;
  }

  async remove(id: number) {
    await this.cityRepository.delete({
      id,
    });

    return null;
  }
}
