import { Test, TestingModule } from '@nestjs/testing';
import { NumbersAppController } from './numbers-app.controller';

describe('NumbersAppController', () => {
  let controller: NumbersAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumbersAppController],
    }).compile();

    controller = module.get<NumbersAppController>(NumbersAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
