import { PrismaClient } from "@prisma/client";
import ApiError from "../utils/ApiError";

const prisma = new PrismaClient();

const createHomework = async (homeworkBody) => {
  const newHomework = await prisma.homework.create({
    data: {
      grade: homeworkBody.grade,
      studentId: homeworkBody.studentId
    }
  });

  return newHomework;
};

export { createHomework }
