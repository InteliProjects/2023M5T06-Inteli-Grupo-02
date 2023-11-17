import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CourseDto } from '../../business/dtos/course.dto';
import { CourseEntity } from '../../business/entities/course.entity';
import { CourseService } from '../../data/services/course.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('/course')
  @ApiOperation({
    summary: 'create a course',
  })
  @ApiCreatedResponse({
    description: 'course created with sucessfully',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow course creation.',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async createCourse(
    @Body() courseDto: CourseDto,
  ): Promise<CourseEntity> {
    return await this.courseService.createCourse(courseDto);
  }

  @Get('/courses')
  @ApiOperation({
    summary: 'get all courses in the database',
  })
  @ApiOkResponse({
    description: 'Return all courses',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findAllCourses(): Promise<CourseEntity[]> {
    return await this.courseService.findAllCourses();
  }

  @Get('/course')
  @ApiOperation({
    summary: 'get a course by name',
  })
  @ApiOkResponse({
    description: 'Return a course',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findCourseByName(
    @Query('courseType') courseType: string,
   ): Promise<CourseEntity>{
   return await this.courseService.findCourseByName(courseType);
  }
}
