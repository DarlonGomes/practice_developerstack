import { Request, Response } from 'express';
import { CreateQuestion } from '../types/questionTypes';
import * as answersService from "../services/answerService";
import * as questionsService from "../services/questionService"
import { CreateAnswer, QuestionId } from '../types/answerTypes';

export async function createQuestion(req: Request<{},{}, CreateQuestion>, res: Response) {
  const {askedBy, question} = req.body;
  const result = await questionsService.sendQuestion(askedBy, question);
  return res.status(201).send(result)
  // TODO
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy, answer} = req.body;
  const {id} = req.params
  const result = await answersService.sendAnswer(answeredBy, answer, Number(id));
  return res.status(201).send(result)
  // TODO
}

export async function get(_req: Request, res: Response) {
  const result = await questionsService.getQuestions();
  return res.status(200).send(result);
  // TODO
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;
  const result = await questionsService.questionById(Number(id));
  return res.status(200).send(result);
  // TODO
}
