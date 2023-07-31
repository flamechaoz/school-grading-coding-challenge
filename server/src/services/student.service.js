import ApiError from "../utils/ApiError.js";
import prisma from "../utils/prismaClient.js";
import { homeworkService } from "./homework.service.js";
import { testService } from "./test.service.js";

const addStudentRecords = async (studentId, homeworks, tests) => {
  // homeworks.forEach(async (homework) => {
  //   await prisma.homework.create({
  //     data: {
  //       grade: homework.grade,
  //       quarter: homework.quarter,
  //       studentId: studentId
  //     }
  //   })
  // });

  // tests.forEach(async (test) => {
  //   await prisma.test.create({
  //     data: {
  //       grade: test.grade,
  //       quarter: test.quarter,
  //       studentId: studentId
  //     }
  //   })
  // });

  const result = await prisma.student.update({
    where: {
      id: studentId,
    },
    data: {
      homeworks: {
        createMany: {
          data: homeworks,
        },
      },
      tests: {
        createMany: {
          data: tests,
        },
      },
    },
  });

  return result;
};

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

const createStudentWithGrades = async (studentName, homeworks, tests) => {
  const newStudent = await prisma.student.create({
    data: {
      name: studentName,
      homeworks: {
        create: homeworks,
      },
      tests: {
        create: tests
      },
    }
  });

  return newStudent;
};

const deleteStudentsRecords = async(studentId, quarter) => {
  const result = await prisma.student.update({
    where: {
      id: studentId,
    },
    data: {
      homeworks: {
        deleteMany: {
          quarter: quarter
        },
      },
      tests: {
        deleteMany: {
          quarter: quarter
        },
      },
    }
  });

  // await homeworkService.deleteMultipleHomeworks(studentId, quarter);
  // await testService.deleteMultipleTests(studentId, quarter);
  return result;
}

const getStudentByName = async(studentName) => {
  const student = await prisma.student.findUnique({
    where: {
      name: studentName,
    },
  });

  return student;
}

export const studentService = {
  addStudentRecords,
  createStudent,
  createStudentWithGrades,
  deleteStudentsRecords,
  getStudentByName
};
