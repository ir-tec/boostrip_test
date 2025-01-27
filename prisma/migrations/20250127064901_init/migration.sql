-- CreateEnum
CREATE TYPE "AssignmentStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "Lead" (
    "lead_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("lead_id")
);

-- CreateTable
CREATE TABLE "SalesPerson" (
    "sales_person_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesPerson_pkey" PRIMARY KEY ("sales_person_id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "assignment_id" TEXT NOT NULL,
    "lead_id" TEXT NOT NULL,
    "sales_person_id" TEXT NOT NULL,
    "status" "AssignmentStatus" NOT NULL DEFAULT 'PENDING',
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("assignment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "lead_id_idx" ON "Lead"("lead_id");

-- CreateIndex
CREATE UNIQUE INDEX "SalesPerson_email_key" ON "SalesPerson"("email");

-- CreateIndex
CREATE INDEX "sales_person_id_idx" ON "SalesPerson"("sales_person_id");

-- CreateIndex
CREATE INDEX "assignment_id_idx" ON "Assignment"("sales_person_id");

-- CreateIndex
CREATE UNIQUE INDEX "Assignment_lead_id_sales_person_id_key" ON "Assignment"("lead_id", "sales_person_id");

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "Lead"("lead_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_sales_person_id_fkey" FOREIGN KEY ("sales_person_id") REFERENCES "SalesPerson"("sales_person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
