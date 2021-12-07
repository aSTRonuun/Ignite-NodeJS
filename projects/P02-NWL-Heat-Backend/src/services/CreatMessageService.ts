import prismaClient from "../prisma";


class CreatMessageService {
    async execute(text: string, user_id: string) {
        const messages = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        });

        return messages;
    }
}

export {CreatMessageService};
