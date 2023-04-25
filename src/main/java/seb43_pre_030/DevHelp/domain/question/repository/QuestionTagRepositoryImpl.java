package seb43_pre_030.DevHelp.domain.question.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.question.repository.custom.QuestionTagRepositoryCustom;

import javax.persistence.EntityManager;
import java.util.List;

import static seb43_pre_030.DevHelp.domain.question.entity.QQuestionTag.questionTag;


public class QuestionTagRepositoryImpl implements QuestionTagRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    public QuestionTagRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<QuestionTag> tagList(Long tagId) {
        return queryFactory.selectFrom(questionTag)
                .where(questionIdEq(tagId))
                .fetch();
    }

    private BooleanExpression questionIdEq(Long questionId) {
        return questionId != null ? questionTag.question.questionId.eq(questionId) : null;
    }
}
