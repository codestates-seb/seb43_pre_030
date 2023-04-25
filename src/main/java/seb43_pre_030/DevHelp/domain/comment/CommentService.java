package seb43_pre_030.DevHelp.domain.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment update(Long id, Comment updatedComment) {
        return commentRepository.findById(id)
                .map(comment -> {
                    comment.setBody(updatedComment.getBody());
                    comment.setCreated_at(updatedComment.getCreated_at());
                    comment.setUpdated_at(updatedComment.getUpdated_at());
                    return commentRepository.save(comment);
                })
                .orElseThrow(() -> new EntityNotFoundException("Comment not found with id: " + id));
    }

    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

    public List<Comment> findQuestionComments(Long questionId) {
        return commentRepository.findQuestionComments(questionId);
    }


}
