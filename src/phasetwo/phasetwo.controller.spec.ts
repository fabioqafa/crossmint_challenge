import { Test, TestingModule } from '@nestjs/testing';
import { PhasetwoController } from './phasetwo.controller';
import { PhasetwoService } from './phasetwo.service';

describe('PhasetwoController', () => {
  let controller: PhasetwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhasetwoController],
      providers: [PhasetwoService],
    }).compile();

    controller = module.get<PhasetwoController>(PhasetwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
