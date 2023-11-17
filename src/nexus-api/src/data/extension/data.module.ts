import { InitiativeService } from '../services/initiative.service';
import { InitiativeRepository } from '../repositories/initiative.repository';
import { ModuleService } from '../services/module.service';
import { ModuleRepository } from '../repositories/module.repository';
import { AnalystRepository } from '../repositories/analyst.repository';
import { AnalystService } from '../services/analyst.service';
import { CourseRepository } from '../repositories/course.repository';
import { CourseService } from '../services/course.service';
import { Module } from '@nestjs/common';
import { PartnerRepository } from '../repositories/partner.repository';
import { PartnerService } from '../services/partner.service';
import { PrismaService } from '../prisma.service';
import { ClassRepository } from '../repositories/class.repository';
import { ClassService } from '../services/class.service';


@Module({
  providers: [
    InitiativeRepository,
    InitiativeService,
    ModuleService,
    ModuleRepository,
    AnalystRepository,
    AnalystService,
    CourseRepository,
    CourseService,
    PartnerRepository,
    PartnerService,
    ClassRepository,
    ClassService,
    PrismaService
  ],
})
export class DataModule {}
