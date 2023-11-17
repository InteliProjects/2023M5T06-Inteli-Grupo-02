import { Prisma } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import * as uuid from 'uuid';

export const initiativeQueries = {
  findAllInitiativesAndModules: Prisma.sql`
    SELECT
    module.moduleName AS module_name,
    initiative.initiativeName AS initiative_name,
    module.status AS module_status
  FROM
    Module AS module
  INNER JOIN
    Initiative AS initiative ON module.id = initiative.module_id;
    `,

    create: (iniativeDto: InitiativeDto): Sql => Prisma.sql`
    INSERT INTO "Initiative" (
      "id",
      "initiativeName",
      "scope",
      "partnerId",
      "moduleId",
      "courseId",
      "analystId",
      "allocated",
      "status",
      "urlTAPI",
      "isActive",
      "updatedAt"
    )
    VALUES (
      ${uuid.v4()},
      ${iniativeDto.initiativeName},
      ${iniativeDto.scope},
      ${iniativeDto.partnerId},
      ${iniativeDto.moduleId},
      ${iniativeDto.courseId},
      ${iniativeDto.analystId},
      ${iniativeDto.allocated},
      ${iniativeDto.status},
      ${iniativeDto.urlTAPI},
      ${true},
      ${new Date()}
    )
    RETURNING *;
  `,
  update: (id: string, data: InitiativeDto): Sql => Prisma.sql`
  UPDATE "Initiative"
  SET 
    "initiativeName" = ${data.initiativeName},
    "scope" = ${data.scope},
    "moduleId" = ${data.moduleId},
    "courseId" = ${data.courseId},
    "partnerRate" = ${data.partnerRate},
    "analystRate" = ${data.analystRate},
    "allocated" = ${data.allocated},
    "status" = ${data.status},
    "urlTAPI" = ${data.urlTAPI}
  WHERE "id" = ${id}
  RETURNING *;
`,

  

  findAll: Prisma.sql`
  SELECT * FROM "Initiative"
  WHERE "isActive" = true 
  `
};

