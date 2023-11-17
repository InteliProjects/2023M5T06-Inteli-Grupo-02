import { CourseEntity } from '../entities/course-entity';
import { urlBase } from '../interfaces/url-base';

export async function fetchCourses(): Promise<CourseEntity[]> {
  try {
    const urlToFetchCourses = `${urlBase}/courses`;
    const response = await fetch(urlToFetchCourses);

    if (!response.ok) {
      throw new Error('Erro ao recuperar informações dos cursos');
    }

    const coursesData = await response.json();
    return coursesData;
  } catch (error) {
    throw new Error('Error fetching courses');
  }
}
