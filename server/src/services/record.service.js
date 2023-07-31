import ApiError from "../utils/ApiError.js";
import prisma from "../utils/prismaClient.js";
import { homeworkService } from "./homework.service.js";
import { testService } from "./test.service.js";

const addRecords = async (recordId, homeworks, tests) => {
  const result = await prisma.record.update({
    where: {
      id: recordId,
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

const createRecord = async (recordBody) => {
  const newRecord = await prisma.record.create({
    data: {
      ...recordBody
    }
  });

  return newRecord;
};

const createRecords = async (recordName, recordQuarter, homeworks, tests) => {
  const newRecord = await prisma.record.create({
    data: {
      name: recordName,
      quarter: recordQuarter,
      homeworks: {
        create: homeworks,
      },
      tests: {
        create: tests
      },
    }
  });

  return newRecord;
};

const deleteAllRecords = async() => {
  await prisma.test.deleteMany({});
  await prisma.homework.deleteMany({});
  await prisma.record.deleteMany({});
};

const deleteRecords = async(recordId, quarter) => {
  const result = await prisma.record.update({
    where: {
      id: recordId,
    },
    data: {
      homeworks: {
        deleteMany: {
        },
      },
      tests: {
        deleteMany: {
        },
      },
    }
  });

  return result;
}

const getAllRecords = async() => {
  const records = await prisma.record.findMany({
    include: {
      tests: {},
      homeworks: {}
    },
    orderBy: [
      {
         name: 'asc',
      },
      {
         quarter: 'asc',
      }
   ]
  });

  records.map((record) => {
    const homeworkAverage = record.homeworks.reduce((sum, obj) => sum + obj.grade, 0) / record.homeworks.length;
    const testAverage = record.tests.reduce((sum, obj) => sum + obj.grade, 0) / record.tests.length;
    const quarterAverage = (homeworkAverage * .4) + (testAverage * .6);
    record.quarterAverage = quarterAverage.toFixed(1);
  });

  return records;
};

const getRecord = async(name, quarter) => {
  const record = await prisma.record.findUnique({
    where: {
      name,
      quarter,
    },
  });

  return record;
};

export const recordService = {
  addRecords,
  createRecord,
  createRecords,
  deleteAllRecords,
  deleteRecords,
  getAllRecords,
  getRecord
};
