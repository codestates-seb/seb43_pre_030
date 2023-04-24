package seb43_pre_030.DevHelp.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import seb43_pre_030.DevHelp.auth.JwtTokenizer;
import seb43_pre_030.DevHelp.domain.user.dto.LoginDto;
import seb43_pre_030.DevHelp.domain.user.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


// JWT(Json Web Token) 인증을 처리하는 필터
// SLF4J 로깅추가
@Slf4j

// 스프링 시큐리티에서 기본 제공하는 로그인 인증 필터(UsernamePasswordAuthenticationFilter )를 상송받음.
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {


    //jwt 토큰 생성,검증 클래스와 / 인증 매니저 생성자로 받음.
    private final JwtTokenizer jwtTokenizer;
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(JwtTokenizer jwtTokenizer, AuthenticationManager authenticationManager) {
        this.jwtTokenizer = jwtTokenizer;
        this.authenticationManager = authenticationManager;
    }

    //@sneakythrows는 예외를 try-catch 블록으로 처리하지 않고 해당 예외를 던지도록 하는 기능을 제공
    // 메소드에서 예외가 발생하면 이를 무시하고 호출자에게 예외를 전달하여 해당 예외를 처리하도록 하는 어노테이션임.

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }


    //인증이 성공된 후 호출되는 메소드.
    // 사용자 정보를 바탕으로 accesstoken을 생성하고 json으로 응답.
    //refreshtoken은 주석처리. accesstoken만 진행
    // 주석부분은 refreshtoekn을 생성해서 responsecookie를 생성하고, 사용자 정보를 업데이트 하는 코드임.
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws ServletException, IOException {
        User user = (User) authResult.getPrincipal();

        String accessToken = delegateAccessToken(user);
//        String refreshToken = delegateRefreshToken(user);

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");

//        ResponseCookie cookie = ResponseCookie
//                .from("Refresh", refreshToken)
//                .maxAge(jwtTokenizer.getRefreshTokenExpirationMinutes())
//                .path("/")
//                .secure(true)
//                .sameSite("None")
//                .httpOnly(true)
//                .build();

        String result = "{\"accessToken\" : \"" + accessToken + "\"}";

        response.setStatus(200);
//        response.setHeader("Set-Cookie", cookie.toString());
        response.getWriter().write(result);

//        userDetailsService.updateRefreshToken(user.getEmail(), refreshToken);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    // 사용자 정보를MAP에 담아서 jwt 토큰을 생성하기.

    private String delegateAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getUserId());
        claims.put("username", user.getEmail());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return "Bearer_" + jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
    }
}
