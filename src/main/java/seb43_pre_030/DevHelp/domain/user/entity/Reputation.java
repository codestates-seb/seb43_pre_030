package seb43_pre_030.DevHelp.domain.user.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb43_pre_030.DevHelp.audit.Auditable;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name ="REPUTATIONS")
public class Reputation extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reputationId;

    @Column(nullable = false)
    private int amount = 1;

    @OneToOne(mappedBy = "reputation")
    private User user;

    public void setUser(User user) {
        this.user = user;
        if (user.getReputation() != this) {
            user.setReputation(this);
        }
    }

}