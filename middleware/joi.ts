// import {NextFunction ,Request,Response} from 'express';
// import Joi, { ObjectSchema } from "joi";



//  export const ValidateJoi = (schema: ObjectSchema) =>{
//     return async (req:Request,res:Response, next:NextFunction) =>{
//         try{
//             await schema.validateAsync(req.body);
//             next();
//         }catch(error){
//             console.log(error);
//             return res.status(404).json({error});
//         }
//     };
//  };

//  export const Schemas = {
//     data:Joi.object({
//         username: Joi.string().alphanum().min(3).max(15).required(),
//         password : Joi.string().required(),
//         birth_year:Joi.number().integer().min(1999).max(2023),    })
//  }

// function next() {
//     throw new Error("Function not implemented.");
// }


import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function jsonValidationMiddleware(
  schema: Joi.ObjectSchema
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      next();
    }
  };
}
