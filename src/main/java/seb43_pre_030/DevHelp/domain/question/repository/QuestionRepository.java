package seb43_pre_030.DevHelp.domain.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.repository.custom.QuestionRepositoryCustom;

public interface QuestionRepository extends JpaRepository<Question, Long>, QuestionRepositoryCustom {
    @Modifying
    @Query("update Question p set p.viewCount = :viewCount where p.questionId = :questionId")
    int updateViewCount(@Param("viewCount") int viewCount, @Param("questionId") Long questionId);

}
