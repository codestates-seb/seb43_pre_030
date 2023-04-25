package seb43_pre_030.DevHelp.domain.answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query("SELECT a FROM ANSWER a WHERE a.question = :questionId")
    List<Answer> findAnswers(Long questionId);
}
