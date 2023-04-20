package seb43_pre_030.DevHelp.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String body;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long question_Id;
        private String title;
        private String body;
        private LocalDateTime created_At;
        private LocalDateTime updated_at;

        private int viewCount;
        private String userName;
        private String userEmail;

        private List<AnswerDto.Response> answers;
    }

    @Getter
    @Setter
    public static class ResponseCheck {
        private int Id;
    }
}