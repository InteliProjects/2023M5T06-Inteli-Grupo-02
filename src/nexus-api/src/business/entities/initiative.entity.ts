
export interface InitiativeEntity { 
    readonly id: string;
    readonly initiativeName: string;
    readonly scope: string;
    readonly partnerId: string;
    readonly courseId?: string | null;
    readonly moduleId?: string | null;
    readonly partnerRate: number;
    readonly stage: number;
    readonly analystRate: number;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
