import { Test, TestingModule } from '@nestjs/testing';
import { NumbersAppService } from './numbers-app.service';

describe('NumbersAppService', () => {
  let service: NumbersAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumbersAppService],
    }).compile();

    service = module.get<NumbersAppService>(NumbersAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
