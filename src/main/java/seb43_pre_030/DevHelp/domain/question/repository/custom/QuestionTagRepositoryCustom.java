package seb43_pre_030.DevHelp.domain.question.repository.custom;

import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;

import java.util.List;

public interface QuestionTagRepositoryCustom {
    List<QuestionTag> tagList(Long questionId);
}
