import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { app } from './setup';

describe('LoginController', () => {
  let loginApp: INestApplication;

  // setup
  beforeAll(async () => {
    loginApp = app;
  }, 10000);

  it('should return login credentials for a partner', async () => {
    // Arrange
    const credentials = {
      email: 'teste@email.com',
      password: '1234vitor',
    };

    // Act
    const response = await request(loginApp.getHttpServer())
      .post('/login')
      .send(credentials);

    const firstItem = response.body;

    // Assert
    expect(HttpStatus.CREATED);
    expect(response.body).toBeDefined();
    expect(firstItem.isConnected).toBe(true);
    expect(firstItem.userType).toBe('partner');
    expect(firstItem.userId).toBeDefined();
  }, 30000);

  it('should return login credentials for a analyst', async () => {
    // Arrange
    const credentials = {
      email: 'vitor.santos@sou.inteli.edu.br',
      password: '12345',
    };

    // Act
    const response = await request(loginApp.getHttpServer())
      .post('/login')
      .send(credentials);

      const firstItem = response.body;

    // Assert
    expect(HttpStatus.CREATED);
    expect(response.body).toBeDefined();
    expect(firstItem.isConnected).toBe(true);
    expect(firstItem.userType).toBe('analyst');
    expect(firstItem.userId).toBeDefined();
  }, 30000);

  it('should return a error because the incorrect credentials', async () => {
    // Arrange
    const credentials = {
      email: 'emailerrado@example.com',
      password: 'senha_incorreta',
    };


    // Act
    const response = await request(loginApp.getHttpServer())
      .post('/login')
      .send(credentials)
  

      // Assert
    expect(response.body).toBeDefined();
    expect(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(response.body.message).toBe("Internal server error");
  }, 30000);
});
