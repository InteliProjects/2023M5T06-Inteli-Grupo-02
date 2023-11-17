import { Prisma } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
import * as uuid from 'uuid';

export const courseQueries = {
  findAll: Prisma.sql`
    SELECT * FROM "Course"
    WHERE "isActive" = true;
  `,
  create: (courseData): Sql => Prisma.sql`
    INSERT INTO "Course" ("id", "courseType", "director", "isActive", "createdAt", "updatedAt")
    VALUES (
      ${uuid.v4()},
      ${courseData.courseType},
      ${courseData.director},
      ${true},
      ${new Date()},
      ${new Date()}
    )
    RETURNING *;
  `,

  update: (courseData, id): Sql => Prisma.sql`
    UPDATE "Course"
    SET
      "courseType" = ${courseData.courseType},
      "director" = ${courseData.director}
    WHERE "id" = ${id}
    RETURNING *;
  `,

  delete: (id): Sql => Prisma.sql`
    UPDATE "Course"
    SET
      "isActive" = false
    WHERE "id" = ${id}
    RETURNING *;
  `,
  findByPartnerName: (courseName: string): Sql => Prisma.sql`
  SELECT * FROM "Course"
  WHERE "courseType" LIKE '%' || ${courseName} || '%'
  AND "isActive" = true
  LIMIT 1;
`,
};
