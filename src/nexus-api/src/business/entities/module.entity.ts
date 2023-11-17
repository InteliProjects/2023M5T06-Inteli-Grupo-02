import { Module } from "@prisma/client";
import { StatusEnum } from "../enums/status.enum";

export interface ModuleEntity extends Module {
    id: string;
    courseCode: string;
    moduleName: string;
    status: string;
    beginData: Date;
    partnerId: string;
    courseId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
