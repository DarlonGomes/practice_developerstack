// TODO
import * as questionRepository from "../repositories/questionRepository";

export async function sendQuestion (askedBy: string, question: string){
    const result = await questionRepository.createQuestion(askedBy, question);
    return result
}

export async function getQuestions (){
    const result = await questionRepository.listQuestions();
    return result
}

export async function questionById (id: number){
    const result = await questionRepository.byId(id)
    return result;
}