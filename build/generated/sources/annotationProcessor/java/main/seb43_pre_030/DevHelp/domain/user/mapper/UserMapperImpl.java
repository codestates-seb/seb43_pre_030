package seb43_pre_030.DevHelp.domain.user.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import seb43_pre_030.DevHelp.domain.user.dto.UserDto;
import seb43_pre_030.DevHelp.domain.user.entity.Reputation;
import seb43_pre_030.DevHelp.domain.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-26T14:59:02+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(UserDto.Post userPost) {
        if ( userPost == null ) {
            return null;
        }

        User user = new User();

        user.setDisplayName( userPost.getDisplayName() );
        user.setEmail( userPost.getEmail() );
        user.setPassword( userPost.getPassword() );

        return user;
    }

    @Override
    public UserDto.Response userToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        long userId = 0L;
        String email = null;
        String displayName = null;
        String profileImage = null;
        Reputation reputation = null;

        if ( user.getUserId() != null ) {
            userId = user.getUserId();
        }
        email = user.getEmail();
        displayName = user.getDisplayName();
        profileImage = user.getProfileImage();
        reputation = user.getReputation();

        UserDto.Response response = new UserDto.Response( userId, email, displayName, profileImage, reputation );

        return response;
    }

    @Override
    public User userPatchToUser(UserDto.Patch userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( userPatchDto.getUserId() );
        user.setDisplayName( userPatchDto.getDisplayName() );

        return user;
    }

    @Override
    public List<UserDto.Response> userListToUserResponseList(Page<User> userList) {
        if ( userList == null ) {
            return null;
        }

        List<UserDto.Response> list = new ArrayList<UserDto.Response>();
        for ( User user : userList ) {
            list.add( userToUserResponse( user ) );
        }

        return list;
    }
}
