package seb43_pre_030.DevHelp.domain.comment;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentDto {
    private Long commentId;
    private String body;
    private String created_at;
    private String updated_at;
    private Long usersId;
    private Long questionId;
}

