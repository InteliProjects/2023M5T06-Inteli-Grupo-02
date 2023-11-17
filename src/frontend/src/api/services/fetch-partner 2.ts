import { PartnerEntity } from "../entities/partner.entity";
import { urlBase } from "../interfaces/url-base";

const urlToFetchInitiatives = urlBase + "/partners";

export async function fetchPartnerData(): Promise<PartnerEntity[]> {
  try {
    const response = await fetch(urlToFetchInitiatives);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching initiatives');
  }
}