package seb43_pre_030.DevHelp.exception;

import lombok.Getter;

// 기능: API 예외처리 구현
public class BusinessLogicException extends RuntimeException{
    @Getter
    private final ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
