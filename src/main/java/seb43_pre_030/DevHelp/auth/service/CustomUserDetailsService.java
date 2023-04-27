package seb43_pre_030.DevHelp.auth.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import seb43_pre_030.DevHelp.auth.PrincipalDetails;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.repository.UserRepository;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;

import java.util.Optional;


// 스프링 시큐리티에서는 인증(authentication)과 권한 부여(authorization)를 위해 UserDetailsService를 사용합니다
//
@Component
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 유저 이름(username)에 해당하는 정보를 DB에서 조회하여
    // UserDetails 인터페이스 구현체인 PrincipalDetails 객체를 반환합니다
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<User> optional = userRepository.findByEmail(email);
        User findUser = optional.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USERS_NOT_VALID));

        return new PrincipalDetails(findUser);
    }
}