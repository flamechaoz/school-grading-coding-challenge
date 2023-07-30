import prisma from "../utils/prismaClient.js";
import ApiError from "../utils/ApiError.js";

const createStudent = async (studentBody) => {
  const newStudent = await prisma.student.create({
    data: {
      name: 'Pabs',
      homeworks: {
        create: [
          {
            grade: 89,
            quarter: 2,
          }
        ],
      },
      tests: {
        create: {
          grade: 89,
          quarter: 2,
        }
      },
    }
  });

  return newStudent;
};

const createStudentWithGrades = async (studentBody) => {
  const record = await prisma.student.create({
    data: {

    }
  });
};

export const studentService = {
  createStudent,
  createStudentWithGrades
};
