package seb43_pre_030.DevHelp.domain.question.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QQuestion is a Querydsl query type for Question
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuestion extends EntityPathBase<Question> {

    private static final long serialVersionUID = 380951822L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QQuestion question = new QQuestion("question");

    public final seb43_pre_030.DevHelp.audit.QAuditable _super = new seb43_pre_030.DevHelp.audit.QAuditable(this);

    public final NumberPath<Integer> answerCount = createNumber("answerCount", Integer.class);

    public final ListPath<seb43_pre_030.DevHelp.domain.answer.Answer, seb43_pre_030.DevHelp.domain.answer.QAnswer> answers = this.<seb43_pre_030.DevHelp.domain.answer.Answer, seb43_pre_030.DevHelp.domain.answer.QAnswer>createList("answers", seb43_pre_030.DevHelp.domain.answer.Answer.class, seb43_pre_030.DevHelp.domain.answer.QAnswer.class, PathInits.DIRECT2);

    public final StringPath body = createString("body");

    public final ListPath<seb43_pre_030.DevHelp.domain.comment.Comment, seb43_pre_030.DevHelp.domain.comment.QComment> comments = this.<seb43_pre_030.DevHelp.domain.comment.Comment, seb43_pre_030.DevHelp.domain.comment.QComment>createList("comments", seb43_pre_030.DevHelp.domain.comment.Comment.class, seb43_pre_030.DevHelp.domain.comment.QComment.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final NumberPath<Long> questionId = createNumber("questionId", Long.class);

    public final ListPath<QuestionTag, QQuestionTag> questionTags = this.<QuestionTag, QQuestionTag>createList("questionTags", QuestionTag.class, QQuestionTag.class, PathInits.DIRECT2);

    public final StringPath title = createString("title");

    public final seb43_pre_030.DevHelp.domain.user.entity.QUser user;

    public final NumberPath<Integer> viewCount = createNumber("viewCount", Integer.class);

    public QQuestion(String variable) {
        this(Question.class, forVariable(variable), INITS);
    }

    public QQuestion(Path<? extends Question> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QQuestion(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QQuestion(PathMetadata metadata, PathInits inits) {
        this(Question.class, metadata, inits);
    }

    public QQuestion(Class<? extends Question> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new seb43_pre_030.DevHelp.domain.user.entity.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

