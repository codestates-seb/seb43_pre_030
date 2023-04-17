package seb43_pre_030.DevHelp.domain.user.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity //JPA엔티티임을 알려줌.
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "USERS") // 테이블 이름을 user로 설정.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId; //사용자의 고유 식별자

    @Column
    private String displayName; //보여지는 이름.

    @Column(nullable = false, updatable = false, unique = true) // 프론트분들께서 이메일은 수정 불가로 요청.
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String profileImage = "default"; // 사용자가 이미지를 등록하지 않아도 default값을 보여주려고함.

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reputation_id")
    private Reputation reputation; // 프론트에서 평판과 관련된 내용 advanced로 하실 예정이니 추가 해달라고함.


    /*
    추가해야할 항목
    이메일 승인여부 / 이메일 인증 여부 /

    작성한 엔티티
    유저 이름 / 이메일 / 패스워드 / 프로필 이미지 / 사용자의 역할정보 / 사용자 평판

    * */

}
