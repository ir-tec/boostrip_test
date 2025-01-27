/*
  Warnings:

  - A unique constraint covering the columns `[lead_id]` on the table `Assignment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assignment_lead_id_key" ON "Assignment"("lead_id");
