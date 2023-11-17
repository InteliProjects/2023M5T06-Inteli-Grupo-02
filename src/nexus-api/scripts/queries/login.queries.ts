import { Prisma } from "@prisma/client";
import { Sql } from "@prisma/client/runtime/library";

export const loginQueries = {
    findAnalystByEmail: (analystEmail: string): Sql => Prisma.sql`
    SELECT * FROM "Analyst"
    WHERE "email" LIKE '%' || ${analystEmail} || '%'
    LIMIT 1;
  `,
  findPartnerByEmail: (partnerEmail: string): Sql => Prisma.sql`
  SELECT * FROM "Partner"
  WHERE "contactEmail" LIKE '%' || ${partnerEmail} || '%'
  LIMIT 1;
`,
}