export interface InitiativeEntity {
  readonly id: string;
  readonly initiativeName: string;
  readonly scope: string;
  readonly status: string;
  readonly partnerId: string;
  readonly courseId?: string | null;
  readonly moduleId?: string | null;
  readonly urlTAPI: string;
  readonly partnerRate: number;
  readonly analystRate: number;
  readonly allocated: boolean;
  readonly partnerName: string;
  readonly sector: string;
  readonly contactEmail: string;
  readonly contactPhone: string;
  readonly organizationType: string;
  readonly rateForProject: number;
  readonly branch: string;
  readonly representativeJob: string;
  readonly textFeedback: string;
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

