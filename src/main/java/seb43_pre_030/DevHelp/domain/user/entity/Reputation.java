package seb43_pre_030.DevHelp.domain.user.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "REPUTATIONS")
public class Reputation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reputationId;

    @OneToOne(mappedBy = "reputation")
    private User user; // 둘의 연관관계를 매핑함.

    @Column(nullable = false)
    private int amount = 1;  // 첫 시작시에 평판량 1로 초기화.


    public void setUser(User user){  // User 객체와 Reputation 객체의 양방향 참조하기 위한 메서드
        this.user = user;
        if (user.getReputation() != this){
            user.setReputation(this);
        }
    }



}
