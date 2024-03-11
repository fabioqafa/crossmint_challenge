import { Test, TestingModule } from '@nestjs/testing';
import { PolyanetsController } from './polyanets.controller';
import { PolyanetsService } from './polyanets.service';

describe('PolyanetsController', () => {
  let controller: PolyanetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolyanetsController],
      providers: [PolyanetsService],
    }).compile();

    controller = module.get<PolyanetsController>(PolyanetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
