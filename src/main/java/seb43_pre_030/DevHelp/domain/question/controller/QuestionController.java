package seb43_pre_030.DevHelp.domain.question.controller;

import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.aspectj.apache.bcel.generic.Tag;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import seb43_pre_030.DevHelp.domain.question.dto.QuestionDTO;
import seb43_pre_030.DevHelp.domain.question.service.QuestionService;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.domain.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<QuestionDTO>> getAllQuestions() {
        List<QuestionDTO> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity<QuestionDTO> getQuestionById(@PathVariable Long questionId) {
        try {
            QuestionDTO question = questionService.getQuestionById(questionId);
            return ResponseEntity.ok(question);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<QuestionDTO> createQuestion(@RequestBody @Valid QuestionDTO questionDTO) {
        QuestionDTO createdQuestion = questionService.createQuestion(questionDTO);
        return ResponseEntity.created(URI.create("/api/questions/" + createdQuestion.getId())).body(createdQuestion);
    }

    @PutMapping("/{questionId}")
    public ResponseEntity<QuestionDTO> updateQuestion(@PathVariable Long questionId, @RequestBody @Valid QuestionDTO questionDTO) {
        try {
            QuestionDTO updatedQuestion = questionService.updateQuestion(questionId, questionDTO);
            return ResponseEntity.ok(updatedQuestion);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable Long questionId) {
        try {
            questionService.deleteQuestion(questionId);
            return ResponseEntity.noContent().build();
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}