import Joi from "@hapi/joi";

export const createDogSchema = {
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required(),
}

