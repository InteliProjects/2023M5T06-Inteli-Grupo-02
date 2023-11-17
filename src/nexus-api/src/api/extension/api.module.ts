import { Module } from '@nestjs/common';
import { PrismaService } from '../../data/prisma.service';
import { PartnerService } from '../../data/services/partner.service';
import { PartnerRepository } from '../../data/repositories/partner.repository';
import { PartnerController } from '../controllers/partner.controller';
import { LoginController } from '../controllers/login.controller';
import { LoginService } from '../../data/services/login.service';
import { ModuleController } from '../controllers/module.controller';
import { AnalystController } from '../controllers/analyst.controller';
import { InitiativeRepository } from '../../data/repositories/initiative.repository';
import { InitiativeService } from '../../data/services/initiative.service';
import { ModuleService } from '../../data/services/module.service';
import { ModuleRepository } from '../../data/repositories/module.repository';
import { AnalystService } from '../../data/services/analyst.service';
import { AnalystRepository } from '../../data/repositories/analyst.repository';
import { InitiativeController } from '../controllers/initiative.controller';
import { CourseController } from '../controllers/course.controller';
import { CourseRepository } from '../../data/repositories/course.repository';
import { CourseService } from '../../data/services/course.service';
import { ClassController } from '../controllers/class.controller';
import { ClassRepository } from '../../data/repositories/class.repository';
import { ClassService } from '../../data/services/class.service';

@Module({
  controllers: [
    PartnerController,
    LoginController,
    ModuleController,
    AnalystController,
    InitiativeController, 
    CourseController,
    ClassController
  ],
  providers: [
    InitiativeRepository,
    InitiativeService,
    ModuleService,
    ModuleRepository,
    PartnerService,
    PartnerRepository,
    PrismaService,
    LoginService,
    AnalystService,
    AnalystRepository,
    CourseRepository,
    CourseService,
    ClassRepository,
    ClassService
  ],
})
export class ApiModule {}
