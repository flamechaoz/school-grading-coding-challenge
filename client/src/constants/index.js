const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const GRADE_TYPE = {
  'H': 'homework',
  'T': 'test',
}

const QUARTERS = {
  'Quarter 1, 2021': 1,
  'Quarter 2, 2021': 2,
  'Quarter 3, 2021': 3,
  'Quarter 4, 2021': 4,
};

export {
  BASE_URL,
  GRADE_TYPE,
  QUARTERS
}
