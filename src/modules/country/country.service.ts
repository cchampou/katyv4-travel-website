import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}
  async create(createCountryDto: CreateCountryDto) {
    const created = this.countryRepository.create({
      name: createCountryDto.name,
    });
    await this.countryRepository.save(created);

    return created;
  }

  async findAll() {
    const allCountries = await this.countryRepository.find();

    return allCountries;
  }

  async findOne(id: number) {
    const country = await this.countryRepository.findOneBy({
      id,
    });

    return country;
  }

  async update(id: number, { name }: UpdateCountryDto) {
    const country = await this.findOne(id);
    country.name = name;
    await this.countryRepository.save(country);

    return country;
  }

  async remove(id: number) {
    const country = await this.findOne(id);
    await this.countryRepository.remove(country);

    return null;
  }
}
