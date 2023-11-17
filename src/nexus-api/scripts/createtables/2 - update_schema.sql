-- Advertências:

-- - Adicionou a coluna obrigatória "initiativeName" à tabela "Initiative" sem um valor padrão. Isso não é possível se a tabela não estiver vazia.

-- - Adicionou a coluna obrigatória "scope" à tabela "Initiative" sem um valor padrão. Isso não é possível se a tabela não estiver vazia.

-- - Adicionou a coluna obrigatória "status" à tabela "Module" sem um valor padrão. Isso não é possível se a tabela não estiver vazia.

-- AlterTable

ALTER TABLE "Initiative"
ADD
    COLUMN "initiativeName" TEXT NOT NULL,
ADD COLUMN "scope" TEXT NOT NULL;

-- AlterTable

ALTER TABLE "Module" ADD COLUMN "status" TEXT NOT NULL;

-- AlterTable

ALTER TABLE "Partner" ADD COLUMN "responsibleName" TEXT;