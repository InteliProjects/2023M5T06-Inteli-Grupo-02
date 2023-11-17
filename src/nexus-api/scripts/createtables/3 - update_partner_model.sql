-- Advertência:

-- - Uma restrição única que abrange as colunas `[password]` na tabela `Partner` será adicionada. Se houver valores duplicados existentes, isso falhará.

-- AlterTable

ALTER TABLE "Partner" ADD COLUMN "password" TEXT;

-- Verifique e trate quaisquer duplicatas existentes antes de criar o índice exclusivo.

-- CreateIndex

CREATE UNIQUE INDEX "Partner_password_key" ON "Partner"("password");