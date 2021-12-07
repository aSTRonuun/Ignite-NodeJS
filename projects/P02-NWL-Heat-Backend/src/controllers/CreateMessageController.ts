import { Request, Response } from 'express';
import { CreatMessageService } from "../services/CreatMessageService";


class CreateMessageController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreatMessageService();

        const resulte = await service.execute(message, user_id);

        return response.json(resulte);
    }
}

export { CreateMessageController };