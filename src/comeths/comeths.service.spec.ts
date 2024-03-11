import { Test, TestingModule } from '@nestjs/testing';
import { ComethsService } from './comeths.service';

describe('ComethsService', () => {
  let service: ComethsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComethsService],
    }).compile();

    service = module.get<ComethsService>(ComethsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
