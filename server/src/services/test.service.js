import prisma from "../utils/prismaClient.js";
import ApiError from "../utils/ApiError.js";

const createTest = async (testBody) => {
  const newTest = await prisma.test.create({
    data: {
      grade: testBody.grade,
      studentId: testBody.studentId
    }
  });

  return newTest;
};

const deleteMultipleTests = async (studentId, quarter) => {
  const deleteTests = await prisma.test.deleteMany({
    where: {
      studentId: studentId,
      quarter: quarter,
    },
  });
}

export const testService = {
  createTest,
  deleteMultipleTests
};
