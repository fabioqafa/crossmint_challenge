import { Test, TestingModule } from '@nestjs/testing';
import { SoloonsController } from './soloons.controller';
import { SoloonsService } from './soloons.service';

describe('SoloonsController', () => {
  let controller: SoloonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoloonsController],
      providers: [SoloonsService],
    }).compile();

    controller = module.get<SoloonsController>(SoloonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
