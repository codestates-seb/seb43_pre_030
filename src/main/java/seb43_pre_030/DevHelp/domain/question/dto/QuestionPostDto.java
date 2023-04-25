package seb43_pre_030.DevHelp.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@AllArgsConstructor
public class QuestionPostDto {
    private String title;

    @NotBlank
    private String body;

    private List<String> tagList;
}
