-- AlterTable
ALTER TABLE "Initiative" ADD COLUMN     "stage" INTEGER DEFAULT 1,
ALTER COLUMN "status" SET DEFAULT 'Pendente';
