import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { CourseDto } from '../business/dtos/course.dto';
import { app } from './setup';
import { CourseEntity } from '../business/entities/course.entity';
import { PrismaClient } from '@prisma/client';

describe('CourseController', () => {
  let courseApp: INestApplication;
  let prisma: PrismaClient;

  //setup
  beforeAll(async () => {
    courseApp = app;
    prisma = new PrismaClient();
  }, 10000);

  // cleanup
  afterEach(async () => {
    await prisma.course.deleteMany({
      where: {
        director: 'directorTeste',
      },
    });
  });

  it('should create a course via POST request', async () => {
    // Arrange
    const courseDto: CourseDto = {
      courseType: 'Engenharia da Computação',
      director: 'directorTeste',
    };

    // Act
    const response = await request(courseApp.getHttpServer())
      .post('/course')
      .send(courseDto);

    const itemCreated = response.body[0] as CourseEntity;

    // Assert
    expect(HttpStatus.CREATED);
    expect(itemCreated).toBeDefined();
    expect(itemCreated.id).toBeDefined();
    expect(itemCreated.courseType).toBe(courseDto.courseType);
    expect(itemCreated.director).toBe(courseDto.director);
    expect(itemCreated.isActive).toBe(true);
    expect(itemCreated.createdAt).toBeDefined();
    expect(itemCreated.updatedAt).toBeDefined();
  }, 30000);

  it('should retrieve all courses via GET request', async () => {
    // Arrange and Act
    const response = await request(courseApp.getHttpServer()).get('/courses');
    const firstItem = response.body[0] as CourseEntity;
    const emptyCourseEntity: CourseEntity = {
      id: '',
      courseType: '',
      director: '',
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Assert
    expect(Object.keys(firstItem)).toEqual(Object.keys(emptyCourseEntity));
    expect(HttpStatus.OK);
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

  it('should return a course find by name (query string)', async () => {
    // Arrange and Act
    const name = 'Engenharia de Software';
    const response = await request(courseApp.getHttpServer()).get(
      `/course?courseType=${name}`,
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        courseType: expect.any(String),
        director: expect.any(String),
        isActive: expect.any(Boolean),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
    expect(response.body[0].courseType).toBe(name);
    expect(response.body).toBeDefined();
  });
});
