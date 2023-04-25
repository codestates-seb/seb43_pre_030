package seb43_pre_030.DevHelp.domain.question.mapper;


import org.mapstruct.Mapper;
import seb43_pre_030.DevHelp.domain.answer.Answer;
import seb43_pre_030.DevHelp.domain.comment.Comment;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPatchDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPostDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionResponseDto;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    public QuestionResponseDto questionToQuestionResponseDto(Question question, List<Tag> tagList, List<Answer> answers, List<Comment> comments);
    public List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions);
}
