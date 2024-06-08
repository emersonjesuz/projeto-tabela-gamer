-- CreateTable
CREATE TABLE "Squards" (
    "id" TEXT NOT NULL,
    "equipe" TEXT NOT NULL,
    "booyar" INTEGER NOT NULL DEFAULT 0,
    "pontos" INTEGER NOT NULL DEFAULT 0,
    "kills" INTEGER NOT NULL DEFAULT 0,
    "bermuda" INTEGER NOT NULL DEFAULT 0,
    "purgatorio" INTEGER NOT NULL DEFAULT 0,
    "kalahari" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Squards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "squard_id" TEXT NOT NULL,
    "bermuda" INTEGER NOT NULL DEFAULT 0,
    "purgatorio" INTEGER NOT NULL DEFAULT 0,
    "kalahari" INTEGER NOT NULL DEFAULT 0,
    "abates" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Squards_equipe_key" ON "Squards"("equipe");

-- CreateIndex
CREATE UNIQUE INDEX "Players_nome_key" ON "Players"("nome");

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_squard_id_fkey" FOREIGN KEY ("squard_id") REFERENCES "Squards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
