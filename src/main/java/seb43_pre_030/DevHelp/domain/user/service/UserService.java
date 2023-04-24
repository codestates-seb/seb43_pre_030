package seb43_pre_030.DevHelp.domain.user.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;
import seb43_pre_030.DevHelp.domain.user.entity.Reputation;
import seb43_pre_030.DevHelp.domain.user.entity.Role;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.repository.UserRepository;
import seb43_pre_030.DevHelp.exception.UserAlreadyExistsException;

import java.time.LocalDateTime;
import java.util.Collections;

@Slf4j
@Service
public class UserService {

    /*
    회원가입 및 로그인기능
    프로필 관리 기능
    질문과 답변 기능
    태그 기능
    검색 기능 : 사용자가 특정 키워드로 검색
    */

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //회원가입기능

    public UserDto createUser(UserDto userDto) throws UserAlreadyExistsException {
        if (userRepository.findByUsername(userDto.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("User with username " +  userDto.getUsername() + " already exists");
        }

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getEncryptedPassword()));
        user.setRoles(Collections.singletonList(Role.ROLE_USER.name()));
        user.setCreatedAt(LocalDateTime.now());
        user.setModifiedAt(LocalDateTime.now());


        Reputation reputation = new Reputation();
        reputation.setAmount(0);
        reputation.setUser(user);

        user.setReputation(reputation);

        User savedUser = userRepository.save(user);
        return UserDto.Response.builder()
                .userId(savedUser.getUserId())
                .displayName(savedUser.getDisplayName())
                .email(savedUser.getEmail())
                .profileImage(savedUser.getProfileImage())
                .reputation(savedUser.getReputation())
                .build();

    }

    public Object getLogin() {
    }


    /*

    public UserDto createUser(UserDto userDto) throws UserAlreadyExistsException {
        if (userRepository.findByUsername(userDto.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("User with username " + userDto.getUsername() + " already exists");
        }
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setPoints(0);
        user.setRoles(Collections.singleton(Role.USER));
        User savedUser = userRepository.save(user);
        r

     */



}
