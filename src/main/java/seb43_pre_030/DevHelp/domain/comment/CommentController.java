package seb43_pre_030.DevHelp.domain.comment;

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
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<Comment> saveComment(@RequestBody Comment comment) {
        return ResponseEntity.status(HttpStatus.CREATED).body(commentService.save(comment));
    }

    @PutMapping("/{comment_id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment updatedComment) {
        try {
            return ResponseEntity.ok(commentService.update(id, updatedComment));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<CommentDto>> findAllComment() {
        List<Comment> comments = commentService.findAll();
        List<CommentDto> commentDtos = comments.stream().map(comment -> {
            CommentDto dto = new CommentDto();
            dto.setCommentId(comment.getCommentId());
            dto.setBody(comment.getBody());
            dto.setCreated_at(comment.getCreated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUpdated_at(comment.getUpdated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUsersId(comment.getUser().getUserId());
            dto.setQuestionId(comment.getQuestion().getQuestionId());
            return dto;
        }).collect(Collectors.toList());
        return ResponseEntity.ok(commentDtos);
    }

    @GetMapping("/{comment_id}")
    public ResponseEntity<CommentDto> findCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.findById(id);
        if (comment.isPresent()) {
            CommentDto dto = new CommentDto();
            dto.setCommentId(comment.get().getCommentId());
            dto.setBody(comment.get().getBody());
            dto.setCreated_at(comment.get().getCreated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUpdated_at(comment.get().getUpdated_at().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            dto.setUsersId(comment.get().getUser().getUserId());
            dto.setQuestionId(comment.get().getQuestion().getQuestionId());
            return ResponseEntity.ok(dto);
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{comment_id}")
    public ResponseEntity<Void> deleteCommentById(@PathVariable Long id) {
        commentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
