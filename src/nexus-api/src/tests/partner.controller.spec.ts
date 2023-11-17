import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaClient } from '@prisma/client';
import { app } from './setup';
import { PartnerDto } from 'src/business/dtos/partner.dto';

describe('PartnerController', () => {
  let partnerApp: INestApplication;
  let prisma: PrismaClient;

  // setup
  beforeAll(async () => {
    partnerApp = app;
    prisma = new PrismaClient();
  }, 10000);

  // cleanup
  afterEach(async () => {
    await prisma.partner.deleteMany({
      where: {
        partnerName: 'examplePartnerForTest',
      },
    });
  });

  it('should return all partners', async () => {
    // Arrange and Act
    const response = await request(partnerApp.getHttpServer()).get('/partners');

    // Assert
    expect(response.status).toBe(HttpStatus.OK);
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

  it('should return a partner created with sucess', async () => {
    // Arrange
    const partnerDto: PartnerDto = {
      partnerName: 'examplePartnerForTest',
      sector: '',
      contactEmail: '',
      contactPhone: '',
      password: '',
      branch: '',
      representativeJob: '',
      responsibleName: '',
      organizationType: '',
    };

    // Act
    const response = await request(partnerApp.getHttpServer())
      .post('/partner')
      .send(partnerDto);

    // Assert
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toBeDefined();
    expect(response.body[0].id).toBeDefined();
    expect(response.body[0].partnerName).toBe(partnerDto.partnerName);
    expect(response.body[0].sector).toBe(partnerDto.sector);
    expect(response.body[0].contactEmail).toBe(partnerDto.contactEmail);
    expect(response.body[0].contactPhone).toBe(partnerDto.contactPhone);
    expect(response.body[0].branch).toBe(partnerDto.branch);
    expect(response.body[0].representativeJob).toBe(partnerDto.representativeJob);
    expect(response.body[0].responsibleName).toBe(partnerDto.responsibleName);
    expect(response.body[0].isActive).toBe(true);
    expect(response.body[0].updatedAt).toBeDefined();
  }, 30000);

  it('should return a error because the data for create partner incorrect', async () => {
    // Arrange
    const partnerDto = {
      partnerName: 'examplePartnerForTest',
      sector: '',
      contactEmail: '',
      rateForProject: 0,
      password: '',
      branch: '',
      representativeJob: '',
      responsibleName: '',
    };
    // Act
    const response = await request(partnerApp.getHttpServer())
      .post('/partner')
      .send(partnerDto);

    // Assert
    expect(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(response.body).toBeDefined();
  }, 30000);
});