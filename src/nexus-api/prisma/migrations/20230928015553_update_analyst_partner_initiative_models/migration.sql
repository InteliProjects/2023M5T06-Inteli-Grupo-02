-- AlterTable
ALTER TABLE "Analyst" ADD COLUMN     "rateForProject" INTEGER;

-- AlterTable
ALTER TABLE "Initiative" ADD COLUMN     "allocated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "analystId" TEXT,
ADD COLUMN     "analystRate" INTEGER,
ADD COLUMN     "partnerRate" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Pending',
ADD COLUMN     "urlTAPI" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "organizationType" TEXT NOT NULL DEFAULT 'Unknown';

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_analystId_fkey" FOREIGN KEY ("analystId") REFERENCES "Analyst"("id") ON DELETE SET NULL ON UPDATE CASCADE;
