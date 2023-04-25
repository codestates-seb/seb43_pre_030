package seb43_pre_030.DevHelp.domain.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long>, CommentRepositoryCustom {
    @Query("SELECT c FROM COMMENTS c WHERE c.question = :questionId")
    List<Comment> findQuestionComments(Long questionId);
}
