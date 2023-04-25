package seb43_pre_030.DevHelp.domain.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb43_pre_030.DevHelp.auth.PrincipalDetails;
import seb43_pre_030.DevHelp.domain.answer.AnswerRepository;
import seb43_pre_030.DevHelp.domain.comment.CommentRepository;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPatchDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionPostDto;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionResponseDto;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.question.mapper.QuestionMapper;
import seb43_pre_030.DevHelp.domain.question.service.QuestionService;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;
import seb43_pre_030.DevHelp.domain.tag.mapper.TagMapper;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.service.UserService;
import seb43_pre_030.DevHelp.response.ApiResponse;
import seb43_pre_030.DevHelp.utils.UriUtil;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@Validated
public class QuestionController {
    private final static String DEFAULT_URI = "/question";
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;
    private final TagService tagService;
    private final TagMapper tagMapper;
    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    @PostMapping("/questions")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto,
                                       @AuthenticationPrincipal PrincipalDetails userDetails) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        User user = userService.getUser(userDetails.getUserId());
        question.setUser(user);

        Question createdQuestion = questionService.createQuestion(question, questionPostDto.getTagList(), userDetails);
        URI uri = UriUtil.createUri(DEFAULT_URI, question.getQuestionId());

        return ResponseEntity.created(uri).body(ApiResponse.created());
    }

    @PatchMapping("/questions/{questionId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity patchQuestion(@PathVariable("questionId") @Positive Long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto,
                                        @AuthenticationPrincipal PrincipalDetails userDetails) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto), questionPatchDto.getTagList(), userDetails);

        return ResponseEntity.ok().body(ApiResponse.ok("data", questionPatchDto));
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") @Positive Long questionId) {
        Question question = questionService.findQuestion(questionId);
        List<QuestionTag> questionTags = question.getQuestionTags();
        List<Tag> tags = tagService.findTags(questionTags);

        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question, tags, answerRepository.findAnswers(questionId), commentRepository.findQuestionComments(questionId));

        return ResponseEntity.ok().body(ApiResponse.ok("data", response));
    }

    @GetMapping("/questions")
    public ResponseEntity getAllQuestions() {
        List<Question> allQuestions = questionService.getAllQuestion();
        List<QuestionResponseDto> response = mapper.questionToQuestionResponseDtos(allQuestions);
        for (Question q : allQuestions) {
            List<Tag> tags = new ArrayList<>();
            List<QuestionTag> questionTags = q.getQuestionTags();
            for (QuestionTag qt : questionTags) {
                tags.add(qt.getTag());
            }

            for (QuestionResponseDto questionResponse : response) {
                if (questionResponse.getQuestionId() == q.getQuestionId()) {
                    questionResponse.setTagList(tagMapper.tagsToTagResponseDtos(tags));
                    break;
                }
            }
        }

        return ResponseEntity.ok().body(ApiResponse.ok("data", response));
    }

    @DeleteMapping("/questions/{questionId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
