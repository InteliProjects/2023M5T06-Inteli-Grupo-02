import { urlBase } from "../interfaces/url-base";

export async function fetchEntityByName(
  courseName: string,
  moduleName: string,
  partnerName: string,
){
  const endpointToFetchCourseByName = `${urlBase}/course?courseType=${courseName}`;
  const endpointToFetchModuleByName = `${urlBase}/module?moduleName=${moduleName}`;
  const endpointToFetchPartnerByName = `${urlBase}/partner?partnerName=${partnerName}`;

  try {
    const [courseResponse, moduleResponse, partnerResponse] = await Promise.all([
      fetch(endpointToFetchCourseByName),
      fetch(endpointToFetchModuleByName),
      fetch(endpointToFetchPartnerByName),
    ]);

    if (!courseResponse.ok || !moduleResponse.ok || !partnerResponse.ok) {
      throw new Error("Erro ao conectar à API");
    }

    const course = await courseResponse.json();
    const moduleReceived = await moduleResponse.json();
    const partner = await partnerResponse.json();

    
    const entities = {
      course: course[0].id,
      module: moduleReceived[0].id,
      partner: partner[0].id,
    };

    console.log(entities);
  
    return entities;
  } catch (error) {
    throw new Error(`Error fetching entities: ${error}`);
  }
}
