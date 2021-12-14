import { Router } from "express";
import { CreateCategoryController } from "./src/controllers/CreateCategoryController";
import { DeleteCategoryController } from "./src/controllers/DeletCategoryController";
import { GetAllCategoriesController } from "./src/controllers/GetAllCategoriesController";

const routes = Router();

/**
 * [X] C - CREATE
 * [X] R - READ
 * [ ] U - UPDATE
 * [X] D - DELETE
 */

routes.post("/categories", new CreateCategoryController().handle);

routes.get("/categories", new GetAllCategoriesController().handle);

routes.delete("/categories/:id", new DeleteCategoryController().handle);

export { routes };