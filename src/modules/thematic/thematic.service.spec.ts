import { Test, TestingModule } from '@nestjs/testing';
import { ThematicService } from './thematic.service';

describe('ThematicService', () => {
  let service: ThematicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThematicService],
    }).compile();

    service = module.get<ThematicService>(ThematicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
