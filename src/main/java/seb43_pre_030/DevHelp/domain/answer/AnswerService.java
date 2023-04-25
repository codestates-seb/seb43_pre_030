package seb43_pre_030.DevHelp.domain.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.comment.Comment;
import seb43_pre_030.DevHelp.domain.comment.CommentService;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private CommentService commentService;

    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer update(Long id, Answer updatedAnswer) {
        return answerRepository.findById(id)
                .map(answer -> {
                    answer.setBody(updatedAnswer.getBody());
                    answer.setCreated_at(updatedAnswer.getCreated_at());
                    answer.setUpdated_at(updatedAnswer.getUpdated_at());
                    return answerRepository.save(answer);
                })
                .orElseThrow(() -> new EntityNotFoundException("Answer not found with id: " + id));
    }

    public List<Answer> findAll() {
        return answerRepository.findAll();
    }

    public Optional<Answer> findById(Long id) {
        return answerRepository.findById(id);
    }

    public void deleteById(Long id) {
        answerRepository.deleteById(id);
    }

    public Answer findAnswer(Long answerId) {
        return findVerifiedAnswer(answerId);
    }

    private Answer findVerifiedAnswer(Long answerId) {
        return null;
    }

    /*
     * # 답변 조회 (전체 & 코멘트 포함)
     *
     */
    @Transactional(readOnly = true)
    public List<Answer> findAnswers(Long questionId) {
        List<Answer> answers = answerRepository.findAnswers(questionId);

        for (Answer answer : answers) {
            List<Comment> answerComments = commentService.findQuestionComments(answer.getAnswerId());

            for (Comment comment : answerComments) {
                comment.addAnswer(answer);
            }
        }

        return answers;
    }
}
