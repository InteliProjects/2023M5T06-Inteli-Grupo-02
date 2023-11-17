import { Sql } from '@prisma/client/runtime/library';
import { ModuleDto } from 'src/business/dtos/module.dto';
import { Prisma } from '@prisma/client';
import * as uuid from 'uuid';

export const moduleQueries = {
  findAll: Prisma.sql`
    SELECT * FROM "Module"
    WHERE "isActive" = true 
  `,
  create: (moduleDto: ModuleDto): Sql => Prisma.sql`
    INSERT INTO "Module" ("id", "courseCode", "moduleName", "beginData", "isActive", "createdAt", "updatedAt", "status")
    VALUES (
        ${uuid.v4()},
        ${moduleDto.courseCode},
        ${moduleDto.moduleName},
        ${new Date()},
        ${moduleDto.isActive},
        ${new Date()},
        ${new Date()},
        ${moduleDto.status}
    )
    RETURNING *;
  `,
  findByModuleName: (moduleName: string): Sql => Prisma.sql`
  SELECT * FROM "Module"
  WHERE "moduleName" LIKE '%' || ${moduleName} || '%'
  AND "isActive" = true
  LIMIT 1;
`,
  findAllModulesAndInitiatives: Prisma.sql`
    SELECT
    initiative.initiativeName AS initiative_name,
    module.moduleName AS module_name,
    initiative.status AS initiative_status
    FROM
    Initiative AS initiative
  INNER JOIN
    Module AS module ON initiative.moduleId = module.id;
    `,
};
