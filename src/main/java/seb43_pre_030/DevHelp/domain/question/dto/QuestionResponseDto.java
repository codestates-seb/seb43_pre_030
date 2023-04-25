package seb43_pre_030.DevHelp.domain.question.dto;

import com.amazonaws.Response;

import lombok.Getter;
import lombok.Setter;
import seb43_pre_030.DevHelp.domain.tag.dto.TagResponseDto;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String body;
    private Long answerCount;
    private Long viewCount;
    private List<TagResponseDto> tagList;
    private List<Response> comments;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
}
