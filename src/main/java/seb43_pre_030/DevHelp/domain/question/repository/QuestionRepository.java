package seb43_pre_030.DevHelp.domain.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Long> {
    Page<QuestionEntity> findAll(Pageable pageable); // 전체 질문들
}