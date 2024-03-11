import { Test, TestingModule } from '@nestjs/testing';
import { ComethsController } from './comeths.controller';
import { ComethsService } from './comeths.service';

describe('ComethsController', () => {
  let controller: ComethsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComethsController],
      providers: [ComethsService],
    }).compile();

    controller = module.get<ComethsController>(ComethsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
