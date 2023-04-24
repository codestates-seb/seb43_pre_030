package seb43_pre_030.DevHelp.domain.question.entity;

import lombok.*;
import seb43_pre_030.DevHelp.domain.tag.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import lombok.*;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "question")
@Getter
@Setter
@NoArgsConstructor
public class QuestionEntity extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    private Long id;

    @Builder
    public QuestionEntity(Long id, String title, String body, Timestamp createdAt, Timestamp updatedAt, Long userId) {
        super(createdAt, updatedAt);
        this.id = id;
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public <E> List<E> getTags() {
        return null;
    }
}


