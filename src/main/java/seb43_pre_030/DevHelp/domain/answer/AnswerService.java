package seb43_pre_030.DevHelp.domain.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

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
}
