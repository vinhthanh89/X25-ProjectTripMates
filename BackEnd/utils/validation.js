

export const validateData = (schemaData , dataBody) => {
    const validate = schemaData.validate(dataBody)

    if(validate.error){
        console.log(validate.error);
        console.log(validate.error.details[0].path);
        return {name : validate.error.details[0].path[0] , errorMessage : validate.error.details[0].message}
    }

    return null
}