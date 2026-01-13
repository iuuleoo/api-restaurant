import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { ZodError, z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "List of products" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0, { message: "Value must be greater than zero" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
