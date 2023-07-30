/*
  Warnings:

  - Added the required column `quarter` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quarter` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Homework" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "grade" INTEGER NOT NULL,
    "quarter" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Homework_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Homework" ("createdAt", "grade", "id", "studentId", "updatedAt") SELECT "createdAt", "grade", "id", "studentId", "updatedAt" FROM "Homework";
DROP TABLE "Homework";
ALTER TABLE "new_Homework" RENAME TO "Homework";
CREATE TABLE "new_Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "grade" INTEGER NOT NULL,
    "quarter" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Test_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Test" ("createdAt", "grade", "id", "studentId", "updatedAt") SELECT "createdAt", "grade", "id", "studentId", "updatedAt" FROM "Test";
DROP TABLE "Test";
ALTER TABLE "new_Test" RENAME TO "Test";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
