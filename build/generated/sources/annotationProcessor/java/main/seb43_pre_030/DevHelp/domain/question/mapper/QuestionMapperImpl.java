package seb43_pre_030.DevHelp.domain.question.mapper;

import com.amazonaws.Response;
import com.amazonaws.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb43_pre_030.DevHelp.domain.answer.Answer;
import seb43_pre_030.DevHelp.domain.comment.Comment;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPatchDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPostDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionResponseDto;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.tag.dto.TagResponseDto;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-25T18:13:03+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( questionPostDto.getTitle() );
        question.setBody( questionPostDto.getBody() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPatchDto.getQuestionId() );
        question.setTitle( questionPatchDto.getTitle() );
        question.setBody( questionPatchDto.getBody() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question, List<Tag> tagList, List<Answer> answers, List<Comment> comments) {
        if ( question == null && tagList == null && answers == null && comments == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        if ( question != null ) {
            questionResponseDto.setQuestionId( question.getQuestionId() );
            questionResponseDto.setTitle( question.getTitle() );
            questionResponseDto.setBody( question.getBody() );
            questionResponseDto.setAnswerCount( (long) question.getAnswerCount() );
            questionResponseDto.setViewCount( (long) question.getViewCount() );
            questionResponseDto.setComments( commentListToResponseList( question.getComments() ) );
            questionResponseDto.setCreatedDate( question.getCreatedDate() );
            questionResponseDto.setModifiedDate( question.getModifiedDate() );
        }
        questionResponseDto.setTagList( tagListToTagResponseDtoList( tagList ) );

        return questionResponseDto;
    }

    @Override
    public List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto1( question ) );
        }

        return list;
    }

    protected Response commentToResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        Object response = null;
        HttpResponse httpResponse = null;

        Response response1 = new Response( response, httpResponse );

        return response1;
    }

    protected List<Response> commentListToResponseList(List<Comment> list) {
        if ( list == null ) {
            return null;
        }

        List<Response> list1 = new ArrayList<Response>( list.size() );
        for ( Comment comment : list ) {
            list1.add( commentToResponse( comment ) );
        }

        return list1;
    }

    protected TagResponseDto tagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        tagResponseDto.setTagId( tag.getTagId() );
        tagResponseDto.setTagName( tag.getTagName() );

        return tagResponseDto;
    }

    protected List<TagResponseDto> tagListToTagResponseDtoList(List<Tag> list) {
        if ( list == null ) {
            return null;
        }

        List<TagResponseDto> list1 = new ArrayList<TagResponseDto>( list.size() );
        for ( Tag tag : list ) {
            list1.add( tagToTagResponseDto( tag ) );
        }

        return list1;
    }

    protected QuestionResponseDto questionToQuestionResponseDto1(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setBody( question.getBody() );
        questionResponseDto.setAnswerCount( (long) question.getAnswerCount() );
        questionResponseDto.setViewCount( (long) question.getViewCount() );
        questionResponseDto.setComments( commentListToResponseList( question.getComments() ) );
        questionResponseDto.setCreatedDate( question.getCreatedDate() );
        questionResponseDto.setModifiedDate( question.getModifiedDate() );

        return questionResponseDto;
    }
}
