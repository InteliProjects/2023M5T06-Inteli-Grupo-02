export interface InitiativeDto {
    initiativeName: string;
    scope: string;
    courseId?: string | null;
    moduleId?: string | null;
    partnerId: string;
    courseName?: string;
    moduleName?: string;
    partnerRate?: number;
    analystRate?: number;
    allocated?: boolean;
    partnerName: string;
    stage: number;
    status: string;
    urlTAPI: string;
  }
  