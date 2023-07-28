import prisma from "../utils/prismaClient.js";
import ApiError from "../utils/ApiError.js";

const createStudent = async (studentBody) => {
  const newStudent = await prisma.student.create({
    data: {
      name: studentBody.name
    }
  });

  return newStudent;
};

export { createStudent }
