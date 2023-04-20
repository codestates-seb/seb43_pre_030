package seb43_pre_030.DevHelp.domain.user.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostToUser(UserDto.Post userPost);

    UserDto.Response userToUserResponse(User user);

    User userPatchToUser(UserDto.Patch userPatchDto);

    List<UserDto.Response> userListToUserResponseList(Page<User> userList);
}
