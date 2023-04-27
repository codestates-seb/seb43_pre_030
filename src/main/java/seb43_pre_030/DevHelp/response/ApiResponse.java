package seb43_pre_030.DevHelp.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;



    // api response 클래스는 ApiResponseHeader와 Map으로 구성된 body를 가짐.

@Getter
@RequiredArgsConstructor
public class ApiResponse<T> {
    private final ApiResponseHeader header;
    private final Map<String, T> body;


        //  of 메소드는 HttpStatus와 key, value를 받아서 ApiResponse 객체를 생성하여 반환
        public static <T> ApiResponse<T> of(HttpStatus status, String key, T value) {
            Map<String, T> body = new HashMap<>() {{ put(key, value); }};

            return new ApiResponse<>(new ApiResponseHeader(status.value(), status.getReasonPhrase()), body);
        }

        // // ok 메소드는 ApiResponse 객체를 생성하여 반환하는데, header는 OK이며 body는 null
        public static <T> ApiResponse<T> ok() {
            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.OK.status, ResponseCode.OK.message), null);
        }

        /*
        SingleResponse
         */
        // ok 메소드와 같지만, key와 value를 받아서 ApiResponse 객체를 생성하여 반환
        public static <T> ApiResponse<T> ok(String key, T value) {
            Map<String, T> body = new HashMap<>() {{ put(key, value); }};

            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.OK.status, ResponseCode.OK.message), body);
        }

        /*
        MultiResponse
         */
        // ok 메소드와 같지만, key와 value를 두 쌍 받아서 ApiResponse 객체를 생성하여 반환
        public static <T> ApiResponse<T> ok(String key1, T value1, String key2, T value2) {
            Map<String, T> body = new HashMap<>() {{ put(key1, value1); put(key2,value2);}};

            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.OK.status, ResponseCode.OK.message), body);
        }

        // created, accepted, noContent 메소드는 ApiResponse 객체를 생성하여 반환하는데,
        // header는 ResponseCode에 해당하는 것이며 body는 null
        public static <T> ApiResponse<T> created() {
            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.CREATED.status, ResponseCode.CREATED.message), null);
        }

        public static <T> ApiResponse<T> accepted() {
            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.ACCEPTED.status, ResponseCode.ACCEPTED.message), null);
        }

        public static <T> ApiResponse<T> noContent() {
            return new ApiResponse<>(new ApiResponseHeader(ResponseCode.NO_CONTENT.status, ResponseCode.NO_CONTENT.message), null);
        }

        // ResponseCode는 ApiResponse 객체를 생성할 때 사용됩니다.
        enum ResponseCode {
            OK(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase()),
            CREATED(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase()),
            ACCEPTED(HttpStatus.ACCEPTED.value(), HttpStatus.ACCEPTED.getReasonPhrase()),
            NO_CONTENT(HttpStatus.NO_CONTENT.value(), HttpStatus.NO_CONTENT.getReasonPhrase()),
            ;

            @Getter
            private final int status;

            @Getter
            private final String message;

            ResponseCode(int status, String message) {
                this.status = status;
                this.message = message;
            }
        }
    }


