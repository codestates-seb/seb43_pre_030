package seb43_pre_030.DevHelp.domain.question.repository;

import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity;

public interface QuestionRepository extends JpaRepository<TypePatternQuestions.Question, Long> {
    Page<TypePatternQuestions.Question> findAll(Pageable pageable); // 전체 질문들
}