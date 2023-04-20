package seb43_pre_030.DevHelp.domain.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import seb43_pre_030.DevHelp.domain.user.entity.Reputation;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class UserDto {

    private long userId;
    private String username;
    private String encryptedPassword;
    private String email;
    private String profileImage;
    private List<String> roles ;
    private Reputation reputation;




    public static UserDto fromEntity(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setUsername(user.getUsername());
        userDto.setProfileImage(user.getProfileImage());
        userDto.setReputation(user.getReputation());
        return userDto;
    }



    @Getter
    @AllArgsConstructor
    public static class Post{

        private String displayName;

        @NotBlank(message = "비밀번호는 필수 입력 항목입니다. ")
        private String password;

        @Email
        @NotBlank(message = "이메일은 필수 입력 항목입니다.")
        private String email;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch{

        private Long userId; // null을 가질 수 있는 wrapper class로 감싸기.

        private String displayName;


        public void setUserId(long userId) {this.userId = userId;}
        // 해당 필드에 null 값을 할당하기 위함임.
        // wrapper class이기때문에 null이 올수도 있음.

    }

    @Getter
    @AllArgsConstructor
        public static class Response{

        private long userId;
        private String email;
        private String displayName;
        private String profileImage;
        private Reputation reputation;

        public int getReputation() {return reputation.getAmount();}

    }

}
