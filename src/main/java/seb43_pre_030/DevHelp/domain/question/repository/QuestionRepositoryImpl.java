
package seb43_pre_030.DevHelp.domain.question.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import seb43_pre_030.DevHelp.domain.question.entity.QQuestion;
import seb43_pre_030.DevHelp.domain.question.entity.Question;
import seb43_pre_030.DevHelp.domain.question.repository.custom.QuestionRepositoryCustom;

import javax.persistence.EntityManager;
import java.util.List;

import static seb43_pre_030.DevHelp.domain.question.entity.QQuestion.question;

public class QuestionRepositoryImpl implements QuestionRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    public QuestionRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<Question> findQuestions(Long questionId) {
        return queryFactory.selectFrom(question)
                .where(questionIdEq(questionId))
                .fetch();
    }

    private BooleanExpression questionIdEq(Long questionId) {
        return questionId != null ? QQuestion.question.questionId.eq(questionId) : null;
    }
}