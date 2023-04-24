package seb43_pre_030.DevHelp.answer.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity(name = "ANSWERS")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

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

    // Getters and Setters
}
