-- CreateTable
CREATE TABLE "spaces_table" (
    "space_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "vacancy" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "spaces_table_pkey" PRIMARY KEY ("space_id")
);

-- CreateTable
CREATE TABLE "users_table" (
    "user_id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "emailaddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_emailaddress_key" ON "users_table"("emailaddress");
