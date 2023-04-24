package seb43_pre_030.DevHelp.domain.user.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginDto {

    private String username;

    private String password;
}
