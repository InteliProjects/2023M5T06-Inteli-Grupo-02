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

    create: (initiativeDto: InitiativeDto): Sql => Prisma.sql`
    INSERT INTO "Initiative" (
      "id",
      "initiativeName",
      "scope",
      "partnerId",
      "moduleId",
      "courseId",
      "analystId",
      "allocated",
      "textFeedback",
      "stage",
      "status",
      "urlTAPI",
      "isActive",
      "updatedAt"
    )
    VALUES (
      ${uuid.v4()},
      ${initiativeDto.initiativeName},
      ${initiativeDto.scope},
      ${initiativeDto.partnerId},
      ${initiativeDto.moduleId || null},
      ${initiativeDto.courseId || null},
      ${initiativeDto.analystId},
      ${initiativeDto.allocated},
      ${initiativeDto.textFeedback || null},
      ${initiativeDto.stage},
      ${initiativeDto.status},
      ${initiativeDto.urlTAPI},
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
    "moduleId" = ${data.moduleId || null},
    "courseId" = ${data.courseId || null},
    "partnerRate" = ${data.partnerRate},
    "analystRate" = ${data.analystRate},
    "allocated" = ${data.allocated},
    "textFeedback" = ${data.textFeedback},
    "stage" = ${data.stage},
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

