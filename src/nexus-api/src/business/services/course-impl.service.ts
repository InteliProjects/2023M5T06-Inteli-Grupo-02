import { CourseDto } from "../dtos/course.dto";
import { CourseEntity } from "../entities/course.entity"

export interface ICourseService{
    createCourse(courseDto: CourseDto): Promise<CourseEntity>;
    findAllCourses():Promise<CourseEntity[]>
    findCourseByName(courseName: string): Promise<CourseEntity>;
}