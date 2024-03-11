import { Test, TestingModule } from '@nestjs/testing';
import { PhaseoneService } from './phaseone.service';

describe('PhaseoneService', () => {
  let service: PhaseoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseoneService],
    }).compile();

    service = module.get<PhaseoneService>(PhaseoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
