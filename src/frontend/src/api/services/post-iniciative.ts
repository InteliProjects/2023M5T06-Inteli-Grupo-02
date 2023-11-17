import { InitiativeDto } from '../dtos/initiative.dto';
import { InitiativeEntity } from '../entities/Initiative-entity';
import { urlBase } from '../interfaces/url-base';

export async function postInitiative(dto: InitiativeDto): Promise<InitiativeEntity> {
  try {
    const response = await fetch(`${urlBase}/initiative`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      throw new Error('Erro ao conectar à API');
    }

    const data: InitiativeEntity = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao cadastrar iniciativa');
  }
}
