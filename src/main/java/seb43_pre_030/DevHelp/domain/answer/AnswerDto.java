package seb43_pre_030.DevHelp.domain.answer;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerDto {
    private Long answerId;
    private String body;
    private String created_at;
    private String updated_at;
    private Long userId;
    private Long questionId;
}

