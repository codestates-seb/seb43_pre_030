package seb43_pre_030.DevHelp.answer.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerDto {
    private Long answerId;
    private String body;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;
//    private Integer score;
    // private Long usersId;
    // private Long questionId;
}
