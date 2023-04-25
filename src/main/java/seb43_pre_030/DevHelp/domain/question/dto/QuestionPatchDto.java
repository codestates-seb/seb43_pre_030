package seb43_pre_030.DevHelp.domain.question.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class QuestionPatchDto {
    private Long userId;

    private Long questionId;

    private String title;

    private String body;

    private List<String> tagList;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
