package seb43_pre_030.DevHelp.commet.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity(name = "COMMENTS")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column
    private String body;

    @Column
    private LocalDateTime created_at;

    @Column
    private LocalDateTime updated_at;

//    @Column
//    private Integer score;

//    @ManyToOne
//    @JoinColumn(name = "USERS_ID")
//    private Users usersId;

//    @ManyToOne
//    @JoinColumn(name = "QUESTION_ID")
//    private Question questionId;
}
