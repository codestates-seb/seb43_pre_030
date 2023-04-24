package seb43_pre_030.DevHelp.domain.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
@Entity(name = "question")
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long question_Id;

    @Column(length = 100, nullable = false)
    private String title;

    @Lob  // "Large OBject"를 데이터베이스에 적절하게 저장하기 위한 애노테이션
    private String body;

    @Column(nullable = false)
    private LocalDateTime created_At = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime updated_At = LocalDateTime.now();

    @Column(nullable = false)
    private int viewCount;  // 조회수


    @ManyToOne(targetEntity = Member.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Set<Answer> answers = new HashSet<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    private Set<QuestionTag> questionTags = new HashSet<>();

  /*  public void voteUp(int num) {
        this.score += num;
    }
    public void voteDown(int num) {
        this.score -= num;
    }
    */
}