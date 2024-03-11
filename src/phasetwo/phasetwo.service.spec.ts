import { Test, TestingModule } from '@nestjs/testing';
import { PhasetwoService } from './phasetwo.service';

describe('PhasetwoService', () => {
  let service: PhasetwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhasetwoService],
    }).compile();

    service = module.get<PhasetwoService>(PhasetwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
