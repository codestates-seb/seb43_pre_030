package seb43_pre_030.DevHelp.domain.QuestionTag;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QQuestionTagId is a Querydsl query type for QuestionTagId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QQuestionTagId extends BeanPath<QuestionTagId> {

    private static final long serialVersionUID = -1006986640L;

    public static final QQuestionTagId questionTagId = new QQuestionTagId("questionTagId");

    public final NumberPath<Long> questionId = createNumber("questionId", Long.class);

    public final NumberPath<Long> tagId = createNumber("tagId", Long.class);

    public QQuestionTagId(String variable) {
        super(QuestionTagId.class, forVariable(variable));
    }

    public QQuestionTagId(Path<? extends QuestionTagId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QQuestionTagId(PathMetadata metadata) {
        super(QuestionTagId.class, metadata);
    }

}

