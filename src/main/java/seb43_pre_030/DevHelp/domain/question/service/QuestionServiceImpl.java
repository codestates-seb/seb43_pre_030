package seb43_pre_030.DevHelp.domain.question.service;

import javassist.NotFoundException;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import seb43_pre_030.DevHelp.domain.question.dto.QuestionDTO;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionRepository;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;

import java.util.List;
import java.util.Optional;
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
        List<QuestionDTO> collect = questions.stream()
                .map(questionEntity -> modelMapper.map(questionEntity, QuestionDTO.class))
                .collect(Collectors.toList());
        return collect;
    }

    @Override
    public QuestionDTO getQuestionById(Long questionId) throws NotFoundException {
        TypePatternQuestions.Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NotFoundException("Question not found with id: " + questionId));
        return new QuestionDTO(question);
    }

    @Override
    public QuestionDTO createQuestion(QuestionDTO questionDTO) {
        QuestionEntity questionEntity = modelMapper.map(questionDTO, QuestionEntity.class);
        return modelMapper.map(questionEntity, QuestionDTO.class);
    }

    @Override
    public QuestionDTO updateQuestion(Long questionId, QuestionDTO questionDTO) throws NotFoundException {
        Optional<TypePatternQuestions.Question> questionEntityOpt = questionRepository.findById(questionId);
        if (questionEntityOpt.isEmpty()) {
            throw new NotFoundException("Question not found with id: " + questionId);
        }

        TypePatternQuestions.Question questionEntity = questionEntityOpt.get();
        modelMapper.map(questionDTO, questionEntity);

        TypePatternQuestions.Question updatedQuestion = questionRepository.save(questionEntity);
        return modelMapper.map(updatedQuestion, QuestionDTO.class);
    }

    @Override
    public void deleteQuestion(Long questionId) throws NotFoundException {
        if (!questionRepository.existsById(questionId)) {
            throw new NotFoundException("Question not found with id: " + questionId);
        }
        questionRepository.deleteById(questionId);
    }
}

