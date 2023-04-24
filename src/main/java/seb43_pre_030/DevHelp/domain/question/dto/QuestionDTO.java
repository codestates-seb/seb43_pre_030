package seb43_pre_030.DevHelp.domain.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
public class QuestionDTO {
    private Long id;
    private String title;
    private String body;
    private List<String> tag;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String question;
    private String answer;
    private String type;

    public QuestionDTO(TypePatternQuestions.Question question) {
    }

    public void QuestionDto(Long id, String title, String body, List<String> tags, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.tag = tags;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}