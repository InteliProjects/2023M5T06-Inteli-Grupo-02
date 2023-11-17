import { Partner } from "@prisma/client";


export interface PartnerDto{
    partnerName: string;
    sector: string;
    contactEmail: string;
    contactPhone: string;
    password: string;
    organizationType: string;
    responsibleName: string;
    branch: string;
    representativeJob: string;
}