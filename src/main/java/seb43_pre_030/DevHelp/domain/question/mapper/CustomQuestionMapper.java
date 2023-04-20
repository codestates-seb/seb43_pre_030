package seb43_pre_030.DevHelp.domain.question.mapper;

import seb43_pre_030.DevHelp.domain.question.dto.QuestionDto;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
@Mapper(componentModel = "spring")
@Primary
public class CustomQuestionMapper implements QuestionMapper {
    // Implementation of the questionToResponseCheck method

    @Autowired
    private QuestionMapper questionMapper;

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post post) {
        return questionMapper.questionPostDtoToQuestion(post);
    }
    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch patch){
        return questionMapper.questionPatchDtoToQuestion(patch);
    }
    @Override
    public QuestionDto.Response questionToResponseCheck(Question question) {
        if (question == null) {
            return null;
        }

        long question_Id = 0L;
        String title = null;
        String body = null;
        LocalDateTime created_At = null;
        LocalDateTime updated_At = null;
        /*
        int score = 0;
        int viewCount = 0;
        */
        String userName;
        String userEmail;

        question_Id = question.getQuestion_Id();
        title = question.getTitle();
        body = question.getBody();
        created_At = question.getCreated_At();
        updated_At = question.getUpdated_At();
        /*score = question.getScore();
        viewCount = question.getViewCount();*/
        userName = question.getMember().getName();
        userEmail = question.getMember().getEmail();

        List<AnswerDto.Response> answers = question.getAnswers().stream()
                .map(answer -> {
                    List<CommentDto.Response> comments = answer.getComments().stream()
                            .map(comment -> new CommentDto.Response(
                                    comment.getCommentId(),
                                    comment.getAnswer().getAnswerId(),
                                    comment.getMember().getName(),
                                    comment.getMember().getEmail(),
                                    comment.getBody(),
                                    comment.getCreated_At(),
                                    comment.getUpdated_At()
                            ))
                            .sorted(Comparator.comparing(a -> a.getCommentId()))
                            .collect(Collectors.toList());
                    return new AnswerDto.Response(
                            answer.getAnswerId(),
                            answer.getQuestion().getQuestionId(),
                            answer.getMember().getName(),
                            answer.getMember().getEmail(),
                            answer.getBody(),
                            answer.getCreated_At(),
                            answer.getUpdated_At(),
                            comments
                    );
                })
                .sorted(Comparator.comparing(a -> a.getAnswerId()))
                .collect(Collectors.toList());

        QuestionDto.Response response =
                new QuestionDto.Response(
                        question_Id, title, body, created_At, updated_At, userName, userEmail, answers);

        return response;
    }
    @Override
    public List<QuestionDto.Response> questionsToResponses(List<Question> questions) {

        List<QuestionDto.Response> responses = questions.stream()
                .map(this::questionToResponseCheck)
                .collect(Collectors.toList());

        System.out.println("responses: " + responses);

        return responses;
    }
}