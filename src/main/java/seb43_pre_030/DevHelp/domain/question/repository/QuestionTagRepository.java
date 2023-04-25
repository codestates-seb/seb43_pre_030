package seb43_pre_030.DevHelp.domain.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.question.repository.custom.QuestionTagRepositoryCustom;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long>, QuestionTagRepositoryCustom {
}
