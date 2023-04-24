package seb43_pre_030.DevHelp.domain.user.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import java.util.List;

// @Mapper: MapStruct가 제공하는 어노테이션으로 인터페이스를 기반으로 구현체를 생성해준다.
// componentModel = "spring": Spring 어플리케이션에서 구현체를 Bean으로 관리하기 위한 설정
@Mapper(componentModel = "spring")
public interface UserMapper {

    // UserDto.Post 객체를 User 객체로 매핑하는 메서드 선언
    User userPostToUser(UserDto.Post userPost);

    // User 객체를 UserDto.Response 객체로 매핑하는 메서드 선언
    UserDto.Response userToUserResponse(User user);
    // UserDto.Patch 객체를 User 객체로 매핑하는 메서드 선언
    User userPatchToUser(UserDto.Patch userPatchDto);

    // Page<User> 객체를 List<UserDto.Response> 객체로 매핑하는 메서드 선언
    List<UserDto.Response> userListToUserResponseList(Page<User> userList);
}
