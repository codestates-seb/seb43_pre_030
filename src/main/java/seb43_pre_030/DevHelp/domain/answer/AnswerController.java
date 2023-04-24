package seb43_pre_030.DevHelp.domain.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping
    public ResponseEntity<Answer> saveAnswer(@RequestBody Answer answer) {
        return ResponseEntity.status(HttpStatus.CREATED).body(answerService.save(answer));
    }

    @PutMapping("/{answer-id}")
    public ResponseEntity<Answer> updateAnswer(@PathVariable Long id, @RequestBody Answer updatedAnswer) {
        try {
            return ResponseEntity.ok(answerService.update(id, updatedAnswer));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<AnswerDto>> findAllAnswer() {
        List<Answer> answers = answerService.findAll();
        List<AnswerDto> answerDtos = answers.stream().map(answer -> {
            AnswerDto dto = new AnswerDto();
            dto.setAnswerId(answer.getAnswerId());
            dto.setBody(answer.getBody());
            dto.setCreated_at(answer.getCreated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUpdated_at(answer.getUpdated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUserId(answer.getAnswerId());
            dto.setQuestionId(answer.getQuestion().getId());
            return dto;
        }).collect(Collectors.toList());
        return ResponseEntity.ok(answerDtos);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity<AnswerDto> findAnswerById(@PathVariable Long id) {
        Optional<Answer> answer = answerService.findById(id);
        if (answer.isPresent()) {
            AnswerDto dto = new AnswerDto();
            dto.setAnswerId(answer.get().getAnswerId());
            dto.setBody(answer.get().getBody());
            dto.setCreated_at(answer.get().getCreated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUpdated_at(answer.get().getUpdated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUserId(answer.get().getUser().getUserId());
            dto.setQuestionId(answer.get().getQuestion().getId());
            return ResponseEntity.ok(dto);
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{answer-id}")
    public ResponseEntity<Void> deleteAnswerById(@PathVariable Long id) {
        answerService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
