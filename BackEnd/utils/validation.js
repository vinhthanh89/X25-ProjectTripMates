export const validateData = (schemaData, dataBody) => {
  const validate = schemaData.validate(dataBody);

  if (validate.error) {
    return {
      name: validate.error.details[0].path[0],
      errorMessage: validate.error.details[0].message,
    };
  }

  return null;
};
