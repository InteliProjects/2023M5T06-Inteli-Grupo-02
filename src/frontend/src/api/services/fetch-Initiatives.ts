import { InitiativeEntity } from "../entities/Initiative-entity";
import { ModuleEntity } from "../entities/module-entity";
import { urlBase } from "../interfaces/url-base";

const urlToFetchInitiatives = urlBase + "/initiatives";

export async function fetchInitiatives(): Promise<InitiativeEntity[]> {
  try {
    const response = await fetch(urlToFetchInitiatives);
    const initiatives = await response.json();
    return initiatives;
  } catch (error) {
    throw new Error('Error fetching initiatives');
  }
}

export async function fetchModulesForInitiatives(initiatives: InitiativeEntity[]): Promise<ModuleEntity[]> {
  try {
    const moduleIds = initiatives.map((initiative) => initiative.moduleId);
    const urlToFetchModules = `${urlBase}/modules?moduleIds=${moduleIds.join(',')}`;
    const response = await fetch(urlToFetchModules);
    if (!response.ok) {
      throw new Error('Erro ao recuperar informações dos módulos');
    }
    const modulesData = await response.json();
    return modulesData;
  } catch (error) {
    throw new Error('Error fetching modules');
  }
}

export async function updateInitiative(initiativeId: string, updateData: unknown): Promise<InitiativeEntity> {
  try {
    const urlToUpdateInitiative = `${urlBase}/initiative/${initiativeId}`;

    const response = await fetch(urlToUpdateInitiative, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar iniciativa');
    }

    const updatedInitiative = await response.json();
    return updatedInitiative;
  } catch (error) {
    throw new Error('Error updating initiative');
  }
}
