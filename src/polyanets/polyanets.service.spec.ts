import { Test, TestingModule } from '@nestjs/testing';
import { PolyanetsService } from './polyanets.service';

describe('PolyanetsService', () => {
  let service: PolyanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolyanetsService],
    }).compile();

    service = module.get<PolyanetsService>(PolyanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
