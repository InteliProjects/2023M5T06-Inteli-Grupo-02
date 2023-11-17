import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { app } from './setup';


describe('ModuleController', () => {
  let moduleApp: INestApplication;

  //setup
  beforeAll(async () => {
    moduleApp = app;
  }, 10000);


  it('should return all modules', async () => {
    // Arrange and Act
    const response = await request(moduleApp.getHttpServer()).get('/modules');

    // Assert
    expect(response.body).toBeDefined();
    expect(response.status).toBe(HttpStatus.OK); 
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

});
