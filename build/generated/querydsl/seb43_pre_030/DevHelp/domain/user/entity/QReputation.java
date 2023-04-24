package seb43_pre_030.DevHelp.domain.user.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReputation is a Querydsl query type for Reputation
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReputation extends EntityPathBase<Reputation> {

    private static final long serialVersionUID = -1144162618L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReputation reputation = new QReputation("reputation");

    public final seb43_pre_030.DevHelp.audit.QAuditable _super = new seb43_pre_030.DevHelp.audit.QAuditable(this);

    public final NumberPath<Integer> amount = createNumber("amount", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final NumberPath<Long> reputationId = createNumber("reputationId", Long.class);

    public final QUser user;

    public QReputation(String variable) {
        this(Reputation.class, forVariable(variable), INITS);
    }

    public QReputation(Path<? extends Reputation> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReputation(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReputation(PathMetadata metadata, PathInits inits) {
        this(Reputation.class, metadata, inits);
    }

    public QReputation(Class<? extends Reputation> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

