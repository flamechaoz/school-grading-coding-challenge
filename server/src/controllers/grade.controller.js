import catchAsync from "../utils/catchAsync.js";

const getGrades = catchAsync(async (req, res) => {
  const result = {data: "Hello world"}; 
  res.send(result);
});

export { getGrades }