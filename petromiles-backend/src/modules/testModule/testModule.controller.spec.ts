import { Test, TestingModule } from '@nestjs/testing';
import { TestModuleController } from './testModule.controller';

describe('Carro Controller', () => {
  let controller: TestModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestModuleController],
    }).compile();

    controller = module.get<TestModuleController>(TestModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
