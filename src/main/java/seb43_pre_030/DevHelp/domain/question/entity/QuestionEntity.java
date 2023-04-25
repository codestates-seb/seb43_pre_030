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
@Table(name = "QUESTION")
@Getter
@Setter
@NoArgsConstructor
public class QuestionEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String body;

    @Column(name = "CREATED_AT")
    private LocalDateTime created_at;

    @Column(name = "UPDATED_AT")
    private LocalDateTime updated_at;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(nullable = false)
    private int upvotes = 0;

    @Column(nullable = false)
    private int downvotes = 0;

    @Builder
    public QuestionEntity(Long id, String title, String body, Timestamp createdAt, Timestamp updatedAt, Long userId) {
        super(createdAt, updatedAt);
        this.questionId = id;
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public void setId(Long id) {
        this.questionId = id;
    }

    public Long getId() {
        return questionId;
    }

    public <E> List<E> getTags() {
        return null;
    }

    public void upvote() {
        this.upvotes++;
    }

    public void downvote() {
        this.downvotes++;
    }
}

