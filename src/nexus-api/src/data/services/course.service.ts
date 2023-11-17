import { Injectable } from '@nestjs/common';
import { CourseEntity } from 'src/business/entities/course.entity';
import { ICourseService } from 'src/business/services/course-impl.service';
import { CourseDto } from 'src/business/dtos/course.dto';
import { PrismaService } from '../prisma.service';
import { courseQueries } from '../queries/course,queries';
import { ICourseRepository } from 'src/business/repositories/course-impl.repository';
import { CourseRepository } from '../repositories/course.repository';

@Injectable()
export class CourseService implements ICourseService {
  constructor(
    private readonly repository: CourseRepository,
    private readonly prisma: PrismaService,
  ) {}

  public async createCourse(courseDto: CourseDto): Promise<CourseEntity> {
    return await this.repository.create(courseDto);
  }
  public async findAllCourses(): Promise<CourseEntity[]> {
    return await this.repository.findAll();
  }

  public async findCourseByName(courseName: string): Promise<CourseEntity> {
    const courseFound: CourseEntity = await this.prisma.$queryRaw(
      courseQueries.findByPartnerName(courseName),
    );
    return courseFound;
  }
}