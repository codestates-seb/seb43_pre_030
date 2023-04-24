package seb43_pre_030.DevHelp.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


// spring security에서 인증된 사용자에대한 정보를 나타내는 클래스.
@Slf4j
public class PrincipalDetails extends User implements UserDetails, OAuth2User {

    private Map<String, Object> attributes;

    //UserDetails
    public PrincipalDetails(User user) {
        setUserId(user.getUserId());
        setEmail(user.getEmail());
        setPassword(user.getPassword());
        setRoles(user.getRoles());
        setEmailVerified(user.getEmailVerified());
    }

    //OAuth2User
    public PrincipalDetails(User user, Map<String, Object> attributes) {
        setUserId(user.getUserId());
        setEmail(user.getEmail());
        setPassword(user.getPassword());
        setRoles(user.getRoles());
        setEmailVerified(user.getEmailVerified());
        this.attributes = attributes;
    }


    //OAuth2
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<String> roles = this.getRoles();
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return getEmailVerified();

    }

    @Override
    public String getName() {
        return null;
    }
}
