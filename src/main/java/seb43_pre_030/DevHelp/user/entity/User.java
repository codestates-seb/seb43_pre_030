package seb43_pre_030.DevHelp.user.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity //JPA엔티티임을 알려줌.
@Getter
@Setter
@Table(name = "USERS") // 테이블 이름을 user로 설정.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId; //사용자의 고유 식별자

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    /*
    추가해야할 항목
    이메일 승인여부 / 이메일 인증 여부 / 사용자의 역할정보 / 프로파일 이미지

    작성한 엔티티
    유저 이름 / 이메일 / 패스워드

    * */

}
