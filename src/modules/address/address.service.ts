import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private addressRepository: Repository<Address>) {}
  async create(createAddressDto: CreateAddressDto) {
    const created = this.addressRepository.create(createAddressDto);
    await this.addressRepository.save(created);

    return created;
  }

  async findAll() {
    const addresses = await this.addressRepository.find();

    return addresses;
  }

  async findOne(id: number) {
    const address = await this.addressRepository.findOneBy({ id });

    return address;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.findOne(id);
    if (!address) throw new NotFoundException(`Address #${id} not found`);
    Object.assign(address, updateAddressDto);
    await this.addressRepository.save(address);

    return address;
  }

  async remove(id: number) {
    await this.addressRepository.delete({ id });
  }
}
