package seb43_pre_030.DevHelp.domain.comment;

import java.util.List;

public interface CommentRepositoryCustom {
    List<Comment> findQuestionComments(Long questionId);
}
