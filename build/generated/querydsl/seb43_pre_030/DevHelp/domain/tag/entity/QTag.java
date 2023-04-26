package seb43_pre_030.DevHelp.domain.tag.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTag is a Querydsl query type for Tag
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTag extends EntityPathBase<Tag> {

    private static final long serialVersionUID = -896376472L;

    public static final QTag tag = new QTag("tag");

    public final ListPath<seb43_pre_030.DevHelp.domain.question.entity.QuestionTag, seb43_pre_030.DevHelp.domain.question.entity.QQuestionTag> questionTags = this.<seb43_pre_030.DevHelp.domain.question.entity.QuestionTag, seb43_pre_030.DevHelp.domain.question.entity.QQuestionTag>createList("questionTags", seb43_pre_030.DevHelp.domain.question.entity.QuestionTag.class, seb43_pre_030.DevHelp.domain.question.entity.QQuestionTag.class, PathInits.DIRECT2);

    public final NumberPath<Long> tagId = createNumber("tagId", Long.class);

    public final StringPath tagName = createString("tagName");

    public QTag(String variable) {
        super(Tag.class, forVariable(variable));
    }

    public QTag(Path<? extends Tag> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTag(PathMetadata metadata) {
        super(Tag.class, metadata);
    }

}

