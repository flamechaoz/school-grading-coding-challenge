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

export const testService = {
  createTest
};
