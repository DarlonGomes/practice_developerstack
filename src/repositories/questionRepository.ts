// TODO
import { prisma } from "../config/database";

export async function createQuestion(askedBy: string, question: string){
    const result = await prisma.question.create({
        data:{
            askedBy: askedBy,
            question : question
        }
    })
    return result
}

export async function listQuestions(){
    const result = await prisma.question.findMany({});
    return result
}

export async function byId(id:number) {
    const result = await prisma.question.findUniqueOrThrow({
        where:{
            id: id
        },
        select:{
            id: true,
            question: true,
            askedBy: true,
            Answer:{
                select:{
                    answeredBy: true,
                    answer: true
                }
            }
        }
    });
    return result
}