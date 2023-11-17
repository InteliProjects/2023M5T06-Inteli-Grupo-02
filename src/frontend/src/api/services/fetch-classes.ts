import { ClassEntity } from '../entities/class-entity';
import { urlBase } from '../interfaces/url-base';

export async function fetchClasses(): Promise<ClassEntity[]> {
  try {
    const urlToFetchClasses = `${urlBase}/classes`;
    const response = await fetch(urlToFetchClasses);

    if (!response.ok) {
      throw new Error('Erro ao recuperar informações das turmas');
    }

    const classesData = await response.json();
    return classesData;
  } catch (error) {
    throw new Error('Error fetching classes');
  }
}
