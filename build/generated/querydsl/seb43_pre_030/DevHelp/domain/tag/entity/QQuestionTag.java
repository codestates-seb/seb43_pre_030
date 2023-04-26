package seb43_pre_030.DevHelp.domain.tag.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QQuestionTag is a Querydsl query type for QuestionTag
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuestionTag extends EntityPathBase<QuestionTag> {

    private static final long serialVersionUID = -857035358L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QQuestionTag questionTag = new QQuestionTag("questionTag");

    public final seb43_pre_030.DevHelp.domain.QuestionTag.QQuestionTagId id;

    public final seb43_pre_030.DevHelp.domain.question.entity.QQuestionEntity question;

    public final QTagEntity tag;

    public QQuestionTag(String variable) {
        this(QuestionTag.class, forVariable(variable), INITS);
    }

    public QQuestionTag(Path<? extends QuestionTag> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QQuestionTag(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QQuestionTag(PathMetadata metadata, PathInits inits) {
        this(QuestionTag.class, metadata, inits);
    }

    public QQuestionTag(Class<? extends QuestionTag> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.id = inits.isInitialized("id") ? new seb43_pre_030.DevHelp.domain.QuestionTag.QQuestionTagId(forProperty("id")) : null;
        this.question = inits.isInitialized("question") ? new seb43_pre_030.DevHelp.domain.question.entity.QQuestionEntity(forProperty("question"), inits.get("question")) : null;
        this.tag = inits.isInitialized("tag") ? new QTagEntity(forProperty("tag")) : null;
    }

}

