import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { Season } from './entities/season.entity';
import { SeasonController } from './season.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Season])],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
