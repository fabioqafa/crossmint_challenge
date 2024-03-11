import { Test, TestingModule } from '@nestjs/testing';
import { PhaseoneController } from './phaseone.controller';
import { PhaseoneService } from './phaseone.service';

describe('PhaseoneController', () => {
  let controller: PhaseoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseoneController],
      providers: [PhaseoneService],
    }).compile();

    controller = module.get<PhaseoneController>(PhaseoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
