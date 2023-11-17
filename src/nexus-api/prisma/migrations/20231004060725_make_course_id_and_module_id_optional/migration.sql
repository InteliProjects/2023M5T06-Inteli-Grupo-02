-- DropForeignKey
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_moduleId_fkey";

-- AlterTable
ALTER TABLE "Initiative" ALTER COLUMN "moduleId" DROP NOT NULL,
ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pendente';

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
