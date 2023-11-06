import { Test, TestingModule } from '@nestjs/testing';
import { ThematicController } from './thematic.controller';
import { ThematicService } from './thematic.service';

describe('CountryController', () => {
  let controller: ThematicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThematicController],
      providers: [ThematicService],
    }).compile();

    controller = module.get<ThematicController>(ThematicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
