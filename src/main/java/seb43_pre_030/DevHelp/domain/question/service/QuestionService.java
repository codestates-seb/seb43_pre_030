package seb43_pre_030.DevHelp.domain.question.service;

import javassist.NotFoundException;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionDTO;

import java.util.List;

public interface QuestionService {
    List<QuestionDTO> getAllQuestions();
    QuestionDTO getQuestionById(Long questionId) throws NotFoundException;
    QuestionDTO createQuestion(QuestionDTO questionDTO);
    QuestionDTO updateQuestion(Long questionId, QuestionDTO questionDTO) throws NotFoundException;
    void deleteQuestion(Long questionId) throws NotFoundException;

    QuestionDTO upvoteQuestion(Long questionId) throws NotFoundException;

    QuestionDTO downvoteQuestion(Long questionId) throws NotFoundException;
}
