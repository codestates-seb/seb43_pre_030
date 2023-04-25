package seb43_pre_030.DevHelp.domain.question.service;

import org.springframework.data.domain.Page;
import seb43_pre_030.DevHelp.auth.PrincipalDetails;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.answer.AnswerRepository;
import seb43_pre_030.DevHelp.domain.answer.AnswerService;
import seb43_pre_030.DevHelp.domain.comment.Comment;
import seb43_pre_030.DevHelp.domain.comment.CommentRepository;
import seb43_pre_030.DevHelp.domain.comment.CommentService;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionRepository;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionTagRepository;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.domain.user.service.UserService;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;
import seb43_pre_030.DevHelp.utils.CustomBeanUtil;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;
    private final CustomBeanUtil beanUtil;
    private TagService tagService;
    private final CommentRepository commentRepository;
    private final CommentService commentService;
    private final QuestionTagRepository questionTagRepository;
    private final AnswerRepository answerRepository;
    private final AnswerService answerService;
    private final TagRepository tagRepository;

    public QuestionService(QuestionRepository questionRepository, UserService userService, CustomBeanUtil beanUtil, TagService tagService, CommentRepository commentRepository, CommentService commentService,
                           QuestionTagRepository questionTagRepository,
                           AnswerRepository answerRepository, AnswerService answerService,
                           TagRepository tagRepository) {
        this.questionRepository = questionRepository;
        this.userService = userService;
        this.beanUtil = beanUtil;
        this.tagService = tagService;
        this.commentRepository = commentRepository;
        this.commentService = commentService;
        this.questionTagRepository = questionTagRepository;
        this.answerRepository = answerRepository;
        this.answerService = answerService;
        this.tagRepository = tagRepository;
    }

    public Question createQuestion(Question question, List<String> tagName,
                                   @AuthenticationPrincipal PrincipalDetails userDetails) {
        question.addUser(userService.getUser(userDetails.getUserId()));

        List<Tag> tags = tagService.createByTagName(tagName);
        tags.forEach(tag -> {
            new QuestionTag(question, tag);
        });

        Question saveQuestion = questionRepository.save(question);

        return saveQuestion;
    }

    public Question updateQuestion(Question question, List<String> tagList, @AuthenticationPrincipal PrincipalDetails userDetails) {
        Question foundQuestion = findQuestion(question.getQuestionId());
        userService.verifyUser(findVerifiedQuestionById(question.getQuestionId()).getUser().getUserId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(foundQuestion::setTitle);
        Optional.ofNullable(question.getBody())
                .ifPresent(foundQuestion::setBody);
        if (Optional.ofNullable(tagList).isPresent()) {
            for (int i = 0; i < foundQuestion.getQuestionTags().size(); i++) {
                QuestionTag questionTag = foundQuestion.getQuestionTags().get(i);
                foundQuestion.getQuestionTags().remove(questionTag);
                questionTag.getTag().getQuestionTags().remove(questionTag);
                questionTagRepository.delete(questionTag);
                i--;
            }

            for (String tag : tagList) {
                if (tagRepository.findByTagName(tag).isEmpty()) {
                    Tag newTag = new Tag();
                    newTag.setTagName(tag);
                    tagRepository.save(newTag);
                }
                Tag foundTag = tagRepository.findByTagName(tag).get();
                QuestionTag questionTag = new QuestionTag();
                questionTag.setTag(foundTag);
                questionTag.setQuestion(question);
                foundQuestion.getQuestionTags().add(questionTag);
                foundTag.getQuestionTags().add(questionTag);
                questionTagRepository.save(questionTag);
            }
        }

        return foundQuestion;
    }

//    @Transactional(readOnly = true)
    public Question findQuestion(Long questionId) {
        Question foundQuestion = findVerifiedQuestionById(questionId);
        List<Question> questions = questionRepository.findQuestions(questionId);
        questionRepository.updateViewCount(foundQuestion.getViewCount() + 1, foundQuestion.getQuestionId());

        for (Question question : questions) {
            List<Comment> questionComments = commentService.findQuestionComments(question.getQuestionId());
            for (Comment comment : questionComments) {
                comment.addQuestion(question);
            }
        }

        foundQuestion.setAnswerCount(answerService.findAnswers(questionId).size());

        questionRepository.save(foundQuestion);

        return foundQuestion;
    }

    public List<QuestionTag> findQuestionTagList(Long questionId) {
        return questionTagRepository.tagList(questionId);
    }

    public Page<Question> getAllQuestions(int page) {
        return questionRepository.findAll(PageRequest.of(page, 30));
    }

    public Page<Question> getAllQuestions(int page, String sort) {
        return questionRepository.findAll(PageRequest.of(page, 30, Sort.by(Sort.Order.desc(sort), Sort.Order.desc("createdAt"))));
    }

    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestionById(questionId);
        questionRepository.delete(question);
    }

    private Question findVerifiedQuestionById(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question foundQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return foundQuestion;
    }
}
