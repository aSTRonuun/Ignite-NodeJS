import prismaClient from "../prisma";

import { io } from '../app';

class GetLast3MessagesService {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc",
            },
            include: {
                user: true,
            }
        });

        // SELECT * FROM MESSAGES
        // ORDER BY created_at DESC
        // LIMIT 3

        return messages;
    }
}

export {GetLast3MessagesService};
