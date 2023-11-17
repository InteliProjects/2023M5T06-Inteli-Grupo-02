import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { app } from './setup';
import { AnalystEntity } from 'src/business/entities/analyst.entity';
import { AnalystDto } from 'src/business/dtos/analyst.dto';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

describe('AnalystsController', () => {
  let analystApp: INestApplication;
  let prisma: PrismaClient;

  //setup
  beforeAll(async () => {
    analystApp = app;
    prisma = new PrismaClient();
  }, 20000);

  // cleanup
  afterEach(async () => {
    await prisma.analyst.deleteMany({
      where: {
        role: 'adminteste',
      },
    });

    await prisma.analyst.deleteMany({
      where: {
        email: 'testeItem@gmail.com',
      },
    });
  });

  it('should return all analysts', async () => {
    // Arrange and Act
    const response = await request(analystApp.getHttpServer()).get('/analysts');
    const firstItem = response.body[0] as AnalystEntity;
    const emptyAnalystEntity = {
      id: '',
      name: '',
      password: '',
      role: '',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: '',
      rateForProject: '',
    };

    //Assert
    expect(HttpStatus.OK);
    expect(Array.isArray(response.body)).toBe(true);
    expect(Object.keys(firstItem)).toEqual(Object.keys(emptyAnalystEntity));
  }, 30000);

  it('should return a analyst created - TRUE Case', async () => {
    //Arrange
    const analystDto: AnalystDto = {
      name: uuidv4(),
      password: uuidv4(),
      email: 'testeItem@gmail.com',
      role: 'admin',
    };

    // Act
    const response = await request(analystApp.getHttpServer())
      .post('/analyst')
      .send(analystDto);
    const itemCreated = response.body[0] as AnalystEntity;

    expect(HttpStatus.CREATED);
    expect(itemCreated).toBeDefined();
    expect(itemCreated.id).toBeDefined();
    expect(itemCreated.name).toBe(analystDto.name);
    expect(itemCreated.password).toBe(analystDto.password);
    expect(itemCreated.isActive).toBe(true);
    expect(itemCreated.createdAt).toBeDefined();
    expect(itemCreated.updatedAt).toBeDefined();
  }, 30000);


  it('should return an error in analyst created  - FALSE CASE', async () => {
    // Arrange
    const analyst = {
      name: uuidv4(),
      password: uuidv4(),
      email: null,
      role: 'adminteste',
    };

    // Act
    const response = await request(analystApp.getHttpServer())
      .post('/analyst')
      .send(analyst);

    // Assert
    expect(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(response.body).toBeDefined();
  }, 30000);
});
