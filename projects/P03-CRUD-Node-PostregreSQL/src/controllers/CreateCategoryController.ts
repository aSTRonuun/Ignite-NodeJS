import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
    
        const service = new CreateCategoryService();

        const result = await service.execute({ name, description });

        console.log("veio ate aqui-----------");

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}