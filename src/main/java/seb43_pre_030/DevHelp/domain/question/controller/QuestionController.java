package seb43_pre_030.DevHelp.domain.question.controller;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionDto;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.mapper.CustomQuestionMapper;
import seb43_pre_030.DevHelp.domain.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final CustomQuestionMapper customQuestionMapper;

    //CREATE
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question question = questionService.createQuestion(customQuestionMapper.questionPostDtoToQuestion(post));
        Question createdQuestion = questionService.createQuestion(question);

        QuestionDto.Response responseDto = customQuestionMapper.questionToResponseCheck(createdQuestion);
        SingleResponseDto<QuestionDto.Response> response = new SingleResponseDto<>(responseDto);

        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    //READ
    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question_id") long questionId) {
        Question question = questionService.readQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        customQuestionMapper.questionToResponseCheck(question)),HttpStatus.OK);
    }

    // 전체 조회
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.readQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        customQuestionMapper.questionsToResponses(questions),pageQuestions),HttpStatus.OK);
    }

    //UPDATE
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("question_id") long questionId,
                                        @Valid @RequestBody QuestionDto.Patch patch) {
        Question question = questionService.updateQuestion(
                questionId,customQuestionMapper.questionPatchDtoToQuestion(patch));

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        customQuestionMapper.questionToResponseCheck(question)),HttpStatus.OK);
    }

    //DELETE
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question_id") long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}