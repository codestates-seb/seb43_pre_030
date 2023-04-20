package seb43_pre_030.DevHelp.domain.user.controller;


import com.sun.xml.messaging.saaj.packaging.mime.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb43_pre_030.DevHelp.auth.PrincipalDetails;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;
import seb43_pre_030.DevHelp.domain.user.entity.Reputation;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.mapper.UserMapper;
import seb43_pre_030.DevHelp.domain.user.service.UserService;
import seb43_pre_030.DevHelp.utils.UriUtil;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@Validated
@RequestMapping("/users")
public class UserController {

    private final UserMapper userMapper;
    private final UserService userService;

    public static final String DEFAULT_URI = "/users";


    public UserController(UserMapper userMapper, UserService userService) {
        this.userMapper = userMapper;
        this.userService = userService;
    }

    /*
    폼 로그인 회원등록
     */
    @PostMapping
    public ResponseEntity<?> postUser(@Valid @RequestBody UserDto.Post userPostDto) throws MessagingException {

        User user = userMapper.userPostToUser(userPostDto);
        user.setReputation(new Reputation());

        User createdUser = userService.createUser(user);

        URI uri = UriUtil.createUri(DEFAULT_URI, createdUser.getUserId());

        return ResponseEntity.created(uri).body(ApiResponse.created());
    }

    @GetMapping("/confirm-email")
    public String verifyAccount(@Valid @RequestParam String token) {
        userService.confirmEmail(token);

        return "이메일 인증이 완료되었습니다.";
    }

    /*
    PATCH - 사용자 정보 수정
     */
    @PatchMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> patchUser(@Valid @RequestBody UserDto.Patch userPatchDto, @AuthenticationPrincipal PrincipalDetails userDetails) {
        User user = userMapper.userPatchToUser(userPatchDto);
        user.setUserId(userDetails.getUserId());

        User updatedUser = userService.updateUser(user);

        return ResponseEntity.ok().body(ApiResponse.ok("data", userMapper.userToUserResponse(updatedUser)));
    }

    /*
    GET - 사용자 목록 조회
     */
    @GetMapping
    public ResponseEntity<?> getUsers(@Positive @RequestParam int page) {
        Page<User> userList = userService.getUserList(page - 1);
        int totalPage = userList.getTotalPages();

        List<UserDto.Response> userResponseList = userMapper.userListToUserResponseList(userList);

        return ResponseEntity.ok().body(ApiResponse.ok("data", userResponseList, "totalPages", totalPage));
    }

    /*
    GET - 타 사용자 정보 조회
     */
    @GetMapping("/{user-id}")
    public ResponseEntity<?> getUser(@Positive @PathVariable("user-id") Long userId) {
        User user = userService.getUser(userId);

        return ResponseEntity.ok().body(ApiResponse.ok("data", userMapper.userToUserResponse(user)));
    }

    /*
    GET - 계정 소유자 정보 조회
     */
    @GetMapping("/principal")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails userDetails) {

        User user = userService.getUser(userDetails.getUserId());

        return ResponseEntity.ok().body(ApiResponse.ok("data", userMapper.userToUserResponse(user)));
    }

}
