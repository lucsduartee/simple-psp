-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "creditCardNumber" SET DATA TYPE BIGINT;

-- CreateTable
CREATE TABLE "Payable" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payable_pkey" PRIMARY KEY ("id")
);
