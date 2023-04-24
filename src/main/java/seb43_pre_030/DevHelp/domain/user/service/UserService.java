package seb43_pre_030.DevHelp.domain.user.service;


import javax.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.auth.CustomAuthorityUtils;
import seb43_pre_030.DevHelp.auth.mail.ConfirmationToken;
import seb43_pre_030.DevHelp.auth.mail.ConfirmationTokenService;
import seb43_pre_030.DevHelp.domain.user.entity.User;
import seb43_pre_030.DevHelp.domain.user.repository.UserRepository;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service //서비스 빈으로 등록
@Slf4j // 로깅 진행
public class UserService {
    // 유저 생성, 수정, 조회, 이메일 인증 etc..
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final ConfirmationTokenService confirmationTokenService;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils customAuthorityUtils, ConfirmationTokenService confirmationTokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.customAuthorityUtils = customAuthorityUtils;
        this.confirmationTokenService = confirmationTokenService;
    }

    // 유저 생성
    public User createUser(User user) throws MessagingException {

        validateDuplicateUser(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = new ArrayList<>(customAuthorityUtils.createRoles(user.getEmail()));
        user.setRoles(roles);

        User createdUser = userRepository.saveAndFlush(user);

        Long userId = user.getUserId();
        Optional<String> optional = Optional.ofNullable(user.getDisplayName());
        if (optional.isEmpty()) {
            user.setDisplayName("user"+userId);
        }

        String profileURI = "https://source.boringavatars.com/beam" + userId + "?colors=5F545C,EB7072,F5BA90,F5E2B8,A2CAA5";
        user.setProfileImage(profileURI);

        userRepository.save(user);

        confirmationTokenService.createEmailConfirmationToken(user.getUserId(), user.getEmail());

        return createdUser;
    }

    // 유저 수정

    public User updateUser(User user) {

        User findUser = verifyUser(user.getUserId());

        Optional.ofNullable(user.getDisplayName())
                .ifPresent(findUser::setDisplayName);

        return userRepository.save(findUser);
    }

//    public Object getLogin() {
//    };


    @Transactional(readOnly = true)
    public Page<User> getUserList(int page) {
        return userRepository.findAll(PageRequest.of(page,36, Sort.by(Sort.Direction.DESC, "reputation")));
    }
    // 페이지 네이션을 위한 메소드
    public User getUser(Long userId) {

        Optional<User> optional = userRepository.findById(userId);
        return optional.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USERS_NOT_VALID));
    }

    // 중복 이메일 검사

    private void validateDuplicateUser(String email) {

        Optional<User> optional = userRepository.findByEmail(email);
        if (optional.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.USERS_EXISTS_EMAIL);
        }
    }

    // 이메일 인증 처리 로직.
    public void confirmEmail(String token) {
        ConfirmationToken findConfirmationToken = confirmationTokenService.findByIdAndExpired(token);
        Optional<User> optionalUser = userRepository.findById(findConfirmationToken.getUserId());

        User user = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USERS_NOT_VALID));

        confirmationTokenService.useToken(findConfirmationToken);
        user.setEmailVerified(true);
        userRepository.save(user);
    }

    //입력된 id에 해당하는 유저가 존재하는지 검증.
    public User verifyUser(Long userId) {
        Optional<User> optional = userRepository.findById(userId);
        return optional.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USERS_NOT_VALID));
    }
}