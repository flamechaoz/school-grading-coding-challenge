import Joi from 'joi';

const saveGrades = {
  body: Joi.array().items(
    Joi.object().keys({
      name: Joi.string(),
      quarter: Joi.number().integer(),
      homework: Joi.array().items(Joi.number().integer()),
      test: Joi.array().items(Joi.number().integer()),
    }),
  ),
};

export const gradesValidation = {
  saveGrades
};
