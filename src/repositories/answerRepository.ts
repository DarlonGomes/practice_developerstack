// TODO
import { prisma } from "../config/database";

export async function createAnswer(answeredBy: string, answer: string, id: number){
    const result = await prisma.answer.create({
        data:{
            questionId: id,
            answeredBy: answeredBy,
            answer : answer
        }
    })
    return result
}