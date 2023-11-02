import { Module } from '@nestjs/common';
import { ThematicService } from './thematic.service';
import { ThematicController } from './thematic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thematic } from './entities/thematic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Thematic])],
  controllers: [ThematicController],
  providers: [ThematicService],
})
export class ThematicModule {}
