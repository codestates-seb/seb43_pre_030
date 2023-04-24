package seb43_pre_030.DevHelp.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    COMMENT_NOT_FOUND(404, "Comment not found"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    TAG_NOT_FOUND(404, "Tag not found"),
    UNAUTHORIZED_USER(403, "Unauthorized User"),
    USERS_NOT_VALID(409, "등록되지 않은 사용자입니다."),
    USERS_DOES_NOT_VERIFY_EMAIL(409, "이메일 인증이 되지 않았습니다."),
    EMAIL_TOKEN_EXPIRED(409, "만료된 이메일 인증 토큰입니다.");

    @Getter
    private int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }




}
