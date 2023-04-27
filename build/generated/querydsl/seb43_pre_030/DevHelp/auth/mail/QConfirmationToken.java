package seb43_pre_030.DevHelp.auth.mail;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QConfirmationToken is a Querydsl query type for ConfirmationToken
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QConfirmationToken extends EntityPathBase<ConfirmationToken> {

    private static final long serialVersionUID = -1823494610L;

    public static final QConfirmationToken confirmationToken = new QConfirmationToken("confirmationToken");

    public final BooleanPath expired = createBoolean("expired");

    public final StringPath id = createString("id");

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QConfirmationToken(String variable) {
        super(ConfirmationToken.class, forVariable(variable));
    }

    public QConfirmationToken(Path<? extends ConfirmationToken> path) {
        super(path.getType(), path.getMetadata());
    }

    public QConfirmationToken(PathMetadata metadata) {
        super(ConfirmationToken.class, metadata);
    }

}

