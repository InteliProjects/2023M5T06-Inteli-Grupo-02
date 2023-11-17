import { Prisma } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import * as uuid from 'uuid'; 

export const partnerQueries = {
  findAll: Prisma.sql`
    SELECT * FROM "Partner"
    WHERE "isActive" = true;
  `,
  create: (partnerDto: PartnerDto): Sql => Prisma.sql`
  INSERT INTO "Partner" ("id", "partnerName", "sector", "contactEmail", "contactPhone","branch", "representativeJob", "isActive", "responsibleName", "organizationType", "password", "updatedAt")
  VALUES (
    ${uuid.v4()}, 
    ${partnerDto.partnerName}, 
    ${partnerDto.sector}, 
    ${partnerDto.contactEmail}, 
    ${partnerDto.contactPhone}, 
    ${partnerDto.branch}, 
    ${partnerDto.representativeJob},
    ${true},
    ${partnerDto.responsibleName},
    ${partnerDto.organizationType},
    ${partnerDto.password},
    ${new Date()}
  )
  RETURNING "id", "partnerName", "sector", "contactEmail", "contactPhone", "branch", "representativeJob", "isActive", "responsibleName", "organizationType", "updatedAt";
`,

  update: (partnerDto: PartnerDto, id: string): Sql => Prisma.sql`
  UPDATE "Partner"
  SET 
    "partnerName" = ${partnerDto.partnerName},
    "sector" = ${partnerDto.sector},
    "contactEmail" = ${partnerDto.contactEmail},
    "contactPhone" = ${partnerDto.contactPhone},
    "branch" = ${partnerDto.branch},
    "representativeJob" = ${partnerDto.representativeJob},
    "responsibleName" = ${partnerDto.responsibleName}
  WHERE "id" = ${id}
  RETURNING *;
`,

  delete: (id: string): Sql => Prisma.sql`
    UPDATE "Partner"
    SET
      "isActive" = false
    WHERE id = ${id}
    RETURNING *;
    `,
    findByPartnerName: (partnerName: string): Sql => Prisma.sql`
    SELECT * FROM "Partner"
    WHERE "partnerName" LIKE '%' || ${partnerName} || '%'
    AND "isActive" = true
    LIMIT 1;
  `,
};


