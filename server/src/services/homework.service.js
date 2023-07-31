import prisma from "../utils/prismaClient.js";
import ApiError from "../utils/ApiError.js";

const createHomework = async (homework) => {
  const newHomework = await prisma.homework.create({
    data: {
      grade: homework.grade,
      studentId: homework.studentId
    }
  });

  return newHomework;
};

const deleteMultipleHomeworks = async (studentId, quarter) => {
  const deleteHomeworks = await prisma.homework.deleteMany({
    where: {
      studentId: studentId,
      quarter: quarter,
    },
  });
}

export const homeworkService = {
  createHomework,
  deleteMultipleHomeworks
};
