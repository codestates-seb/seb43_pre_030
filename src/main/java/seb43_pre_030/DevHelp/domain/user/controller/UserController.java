package seb43_pre_030.DevHelp.domain.user.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;
import seb43_pre_030.DevHelp.domain.user.entity.Reputation;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.service.UserService;

import javax.validation.Valid;
import java.net.URI;

@Slf4j
@RestController
@Validated
@RequestMapping("/users")
public class UserController {


    // CRUD create response update delete
    /*
    회원 등록 / 사용자 목록 조회, 타 사용자 정보 조회, 계정 소유자 정보 조회 /
    사용자 정보수정 / 사용자 삭제 기능
     */

    // 생성자
    // API메소드
    // 예외처리
    // 로깅
    // 권한

    public static final String DEFAULT_URI = "/users";

    private final UserService userService;

    /*
    폼 로그인 회원등록
    */
//    @PostMapping
//    public ResponseEntity<?> postUser(@Valid @RequestBody UserDto.Post userPostDto) throws MessagingException {
//
//        // userMapper를 사용하여 UserDto.Post 객체를 User 객체로 변환합니다.
//        User user = userMapper.userPostToUser(userPostDto);
//
//        // 새로운 사용자를 생성하고 데이터베이스에 저장합니다.
//        user.setReputation(new Reputation());
//        User createdUser = userService.createUser(user);
//
//        // 새로운 사용자의 ID를 포함한 URI를 생성합니다.
//        URI uri = UriUtil.createUri(DEFAULT_URI, createdUser.getUserId());
//
//        // HTTP 상태 코드 201 Created와 함께 ApiResponse 객체를 반환합니다.
//        return ResponseEntity.created(uri).body(ApiResponse.created());
//    }
    /*
    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody UserDto userDto) {
        try {
            UserDto createdUser = userService.createUser(userDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }*/


}
