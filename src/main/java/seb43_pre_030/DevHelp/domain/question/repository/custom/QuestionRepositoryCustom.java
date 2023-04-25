package seb43_pre_030.DevHelp.domain.question.repository.custom;

import seb43_pre_030.DevHelp.domain.question.entity.Question;

import java.util.List;

public interface QuestionRepositoryCustom {
    List<Question> findQuestions(Long questionId);
}
