import { Router } from "express";
const router = Router();
import { getQuestions, insertQuestions, dropQuestions, getResult, storeResult, dropResult } from '../controllers/controller.js';

router.route('/questions')
        .get(getQuestions)
        .post(insertQuestions)
        .delete(dropQuestions);

router.route('/result')
        .get(getResult)
        .post(storeResult)
        .delete(dropResult);

export default router;