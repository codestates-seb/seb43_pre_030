package seb43_pre_030.DevHelp.user.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import seb43_pre_030.DevHelp.user.entity.User;

import java.util.Optional;

/*
데이터베이스에 접근하여 데이터를 다루는 기능을 담당하는 Repository.
JpaRepository 인터페이스를 상속받아서 User 엔티티의 crud기능을 쉽게 사용하기위함.

JpaRepository 주요 조작 기능 6가지
- CRUD / Query Method / paging, sorting / Batch / Delete query / named parameter

* */
public interface UserRepository extends JpaRepository <User, Long> {
    Optional<User> findByEmail(String email); //email로 user찾기

    Optional<User> findByUsername(String username); // username으로 user찾기

    Optional<User> findById(Long id); // 데이터에서 id값에 해당하는 사용자를 찾아 그 정보를 optional<user>로 감까서 전달하기.


}
