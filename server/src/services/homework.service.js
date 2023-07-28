import prisma from "../utils/prismaClient.js";
import ApiError from "../utils/ApiError.js";

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
