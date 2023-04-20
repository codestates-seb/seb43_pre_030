package seb43_pre_030.DevHelp.domain.question.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionRepository;

import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;

import javax.xml.stream.events.Comment;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.repository.QuestionRepository;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class QuestionService {
    // TODO 해당 글을 수정, 삭제할 때에는 그 사람이 제대로 접속하였는지, 다른 사람은 아니인지를 확인해야 한다.
    private QuestionRepository questionRepository;
    private UsersRepository memberRepository;
    private UsersService memberService;

    //CREATE
    public Question createQuestion(Question question) {
        long Users_Id = memberService.getLoginUser().getMemberId();
        Users users = getMemberFromId(users_id);

        question.setUsers(users); // 해당 질문을 누가 올렸는지 연결
        return questionRepository.save(question);
    }

    // 맴버 id로 맴버 찾기
    private Users getUsersFromId(long users_Id) {
        return usersRepository.findById(users_Id).get();
    }

    //READ
    public Question readQuestion(long question_Id) {
        Question question = existQuestion(question_Id); // 해당 Id 값의 질문이 존재하는지 검증
        question.setViewCount(question.getViewCount() + 1); // 조회수 +1씩 올라간다. (default 0)
        return questionRepository.save(question);
    }

    public Page<Question> readQuestions(int page, int size) {
        return questionRepository.findAll(
                PageRequest.of(page, size, Sort.by("question_Id").descending())
        );
    }

    public Question existQuestion(long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        return question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    //UPDATE - tag 미포함
    public Question updateQuestion(long questionId, Question changedQuestion) {
        Question question = verifyWriter(questionId); // 현재 사용자가 작성자가 맞는지
        // 해당 글 수정
        question.setTitle(changedQuestion.getTitle());
        question.setBody(changedQuestion.getBody());

        return questionRepository.save(question);
    }

    private Question verifyWriter(long questionId) {
        long memberId = memberService.getLoginUsers().getMemberId();
        Question question = existQuestion(questionId); // 해당 질문이 존재하는지 확인
        if (question.getMember().getUsers_Id() != memberId) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USERS);
        }
        return question;
    }

    //DELETE
    public void deleteQuestion(long question_Id) {
        Question question = verifyWriter(question_Id); //현재 사용자가 작성자가 맞는지
        Users users = question.getUsers();
        usersRepository.save(users);
        questionRepository.delete(question);
    }
}