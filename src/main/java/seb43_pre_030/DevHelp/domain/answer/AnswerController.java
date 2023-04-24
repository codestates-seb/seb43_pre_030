package seb43_pre_030.DevHelp.answer.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping
    public ResponseEntity<Answer> saveAnswer(@RequestBody Answer answer) {
        return ResponseEntity.status(HttpStatus.CREATED).body(answerService.save(answer));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Answer> updateAnswer(@PathVariable Long id, @RequestBody Answer updatedAnswer) {
        try {
            return ResponseEntity.ok(answerService.update(id, updatedAnswer));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Answer>> findAllAnswer() {
        return ResponseEntity.ok(answerService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Answer> findAnswerById(@PathVariable Long id) {
        Optional<Answer> answer = answerService.findById(id);
        if (answer.isPresent()) {
            return ResponseEntity.ok(answer.get());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnswerById(@PathVariable Long id) {
        answerService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
