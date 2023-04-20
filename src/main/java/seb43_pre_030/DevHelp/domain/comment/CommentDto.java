package seb43_pre_030.DevHelp.commet.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentDto {
    private Long commentId;
    private String body;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;
//    private Integer score;
    // private Long usersId;
    // private Long questionId;
}
