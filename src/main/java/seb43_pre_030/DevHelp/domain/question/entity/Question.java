package seb43_pre_030.DevHelp.domain.question.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb43_pre_030.DevHelp.audit.Auditable;
import seb43_pre_030.DevHelp.domain.answer.Answer;
import seb43_pre_030.DevHelp.domain.comment.Comment;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends Auditable {
    public static Object question;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    @Size(min = 20, max = 1000000)
    private String body;

    @Column(columnDefinition = "integer default 0")
    private int answerCount;

    @Column(columnDefinition = "integer default 0")
    private int viewCount;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    public void addUser(User user) {
        this.user = user;
    }

    public void addQuestionTag(QuestionTag questionTag) {
        questionTags.add(questionTag);
    }

    public void setAnswerCount(int answerCount) {
        this.answerCount = answers.size();
    }

    public Long getId() {
        return null;
    }
}
