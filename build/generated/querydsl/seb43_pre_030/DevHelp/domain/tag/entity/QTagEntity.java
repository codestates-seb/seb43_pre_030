package seb43_pre_030.DevHelp.domain.tag.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTagEntity is a Querydsl query type for TagEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTagEntity extends EntityPathBase<TagEntity> {

    private static final long serialVersionUID = 1259373419L;

    public static final QTagEntity tagEntity = new QTagEntity("tagEntity");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final ListPath<seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity, seb43_pre_030.DevHelp.domain.question.entity.QQuestionEntity> questions = this.<seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity, seb43_pre_030.DevHelp.domain.question.entity.QQuestionEntity>createList("questions", seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity.class, seb43_pre_030.DevHelp.domain.question.entity.QQuestionEntity.class, PathInits.DIRECT2);

    public QTagEntity(String variable) {
        super(TagEntity.class, forVariable(variable));
    }

    public QTagEntity(Path<? extends TagEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTagEntity(PathMetadata metadata) {
        super(TagEntity.class, metadata);
    }

}

