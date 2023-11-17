import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { app } from './setup';
import { ClassDto } from '../business/dtos/class.dto';
import { PrismaClient } from '@prisma/client';

describe('ClassController', () => {
  let classApp: INestApplication;
  let prisma: PrismaClient;


  //setup
  beforeAll(async () => {
    classApp = app;
    prisma = new PrismaClient();
  }, 10000);

    // cleanup
  afterEach(async () => {
    await prisma.class.deleteMany({
      where: {
        customerName: 'classTeste',
      },
    });
  });

  it('should create a class', async () => {

   
    // Arrange
    const classDto: ClassDto = {
      customerName: 'classTeste',
      startYear: new Date(),
      courseId: 'c2fa40b3-cd88-49f2-b5af-b32211e05a40',
    };
  
    // Act 
    const response = await request(classApp.getHttpServer()).post('/class').send(classDto);
  
    // Assert
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toBeDefined();
    expect(response.body.customerName).toBe(classDto.customerName);
    expect(new Date(response.body.startYear)).toEqual(classDto.startYear);
    expect(response.body.courseId).toBe(classDto.courseId);
    expect(response.body.isActive).toBe(true);
    expect(response.body.createdAt).toBeDefined();
    expect(response.body.updatedAt).toBeDefined();
  });
  

  it('should return all classes', async () => {
    // Arrange and act
    const response = await request(classApp.getHttpServer()).get('/classes');

    // Assert
    expect(response.status).toBe(HttpStatus.OK); 
    expect(Array.isArray(response.body)).toBe(true);
  });
});
