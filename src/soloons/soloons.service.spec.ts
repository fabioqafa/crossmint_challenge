import { Test, TestingModule } from '@nestjs/testing';
import { SoloonsService } from './soloons.service';

describe('SoloonsService', () => {
  let service: SoloonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoloonsService],
    }).compile();

    service = module.get<SoloonsService>(SoloonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
