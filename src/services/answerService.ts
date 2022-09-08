// TODO
import * as answerRepository from "../repositories/answerRepository";

export async function sendAnswer (answeredBy: string, answer: string, id: number){
    const result = await answerRepository.createAnswer(answeredBy, answer, id);
    return result

}