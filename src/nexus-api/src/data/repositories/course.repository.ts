import { Injectable } from '@nestjs/common';
import { CourseDto } from 'src/business/dtos/course.dto';
import { CourseEntity } from 'src/business/entities/course.entity';
import { ICourseRepository } from 'src/business/repositories/course-impl.repository';
import { PrismaService } from '../prisma.service';
import { courseQueries } from '../queries/course,queries';

@Injectable()
export class CourseRepository implements ICourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(courseDto: CourseDto): Promise<CourseEntity> {
    return await this.prisma.$queryRaw(courseQueries.create(courseDto));
  }
  public async findAll(): Promise<CourseEntity[]> {
    return await this.prisma.$queryRaw(courseQueries.findAll);
  }
}
