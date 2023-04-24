package seb43_pre_030.DevHelp.domain.question.service;

import javassist.NotFoundException;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionDTO;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionRepository;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final TagRepository tagRepository;
    private final ModelMapper modelMapper;

    public QuestionServiceImpl(QuestionRepository questionRepository, TagRepository tagRepository, ModelMapper modelMapper) {
        this.questionRepository = questionRepository;
        this.tagRepository = tagRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<QuestionDTO> getAllQuestions() {
        List<TypePatternQuestions.Question> questions = questionRepository.findAll();
        return questions.stream()
                .map(QuestionDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public QuestionDTO getQuestionById(Long questionId) {
        TypePatternQuestions.Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NotFoundException("Question not found with id: " + questionId));
        return new QuestionDTO(question);
    }

    @Override
    public QuestionDTO createQuestion(QuestionDTO questionDTO) {
        Question question = new Question();
        question.setQuestion(questionDTO.getQuestion());
        question.setAnswer(questionDTO.getAnswer());
        question.setType(questionDTO.getType());

        Question savedQuestion = questionRepository.save(question);
        return new QuestionDTO(savedQuestion);
    }

    @Override
    public QuestionDTO updateQuestion(Long questionId, QuestionDTO questionDTO) throws NotFoundException {
        TypePatternQuestions.Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NotFoundException("Question not found with id: " + questionId));
        question.setQuestion(questionDTO.getQuestion());
        question.setAnswer(questionDTO.getAnswer());
        question.setType(questionDTO.getType());

        TypePatternQuestions.Question updatedQuestion = questionRepository.save(question);
        return new QuestionDTO(updatedQuestion);
    }

    @Override
    public void deleteQuestion(Long questionId) throws NotFoundException {
        if (!questionRepository.existsById(questionId)) {
            throw new NotFoundException("Question not found with id: " + questionId);
        }
        questionRepository.deleteById(questionId);
    }
}

