package seb43_pre_030.DevHelp.auth.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import seb43_pre_030.DevHelp.auth.JwtTokenizer;
import seb43_pre_030.DevHelp.auth.filter.JwtAuthenticationFilter;
import seb43_pre_030.DevHelp.auth.filter.JwtVerificationFilter;
import seb43_pre_030.DevHelp.auth.handler.OAuth2UserSuccessHandler;
import seb43_pre_030.DevHelp.auth.handler.UserAuthenticationFailureHandler;
import seb43_pre_030.DevHelp.auth.handler.UserAuthenticationSuccessHandler;
import seb43_pre_030.DevHelp.auth.service.CustomUserDetailsService;
import seb43_pre_030.DevHelp.auth.service.OAuth2UserDetailsService;

import java.util.List;

// 이 클래스가 spring 구성 영역 구성을 담당하는 클래스임을 나타냄
@Configuration
// spring security를 사용하기위한 필수 구성을 활성화함.
@EnableWebSecurity
// 메소드 단위로 권한 검사를 하기 위해 사용됨. prepostenabled =true로 되면 메소드 단위로
// preauthorize및 postauthorize 애노테이션을 사용하여 권한 검사를 할 수 있음.
@EnableGlobalMethodSecurity(prePostEnabled = true)

//이 클래스는 OAuth2 로그인을 처리하기 위한 필수 구성을 포함함.

public class SecurityConfiguration{

//     Google OAuth2 클라이언트 ID와 클라이언트 비밀번호
    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;

    //이 클래스에서 사용하는 다른 서비스를 주입받기 위한 필드.
    private final JwtTokenizer jwtTokenizer;
    private final CustomUserDetailsService userDetailsService;
    private final OAuth2UserDetailsService oAuth2UserDetailsService;
    private final OAuth2UserSuccessHandler oAuth2UserSuccessHandler;


    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomUserDetailsService userDetailsService, OAuth2UserDetailsService oAuth2UserDetailsService, OAuth2UserSuccessHandler oAuth2UserSuccessHandler) {
        this.jwtTokenizer = jwtTokenizer;
        this.userDetailsService = userDetailsService;
        this.oAuth2UserDetailsService = oAuth2UserDetailsService;
        this.oAuth2UserSuccessHandler = oAuth2UserSuccessHandler;
    }


    // springsecurity 필터 체인 구성.
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // clickjacking 공격을 방지하기 위한 설정
                .headers().frameOptions().sameOrigin()

                // csrf공격 방지
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()

                // JWT 인증 필터와 JWT 검증 필터를 등록
                .apply(new CustomFilterConfigurer1())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll() //추후 수정
                )
                .oauth2Login()
                .successHandler(oAuth2UserSuccessHandler)
                .userInfoEndpoint().userService(oAuth2UserDetailsService);//후처리
        return http.build();
    }

    //암호화된 패스워드 생성 위함.
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    //cors설정을 위함
    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*")); //모든 출처에대해 스크립트 기반의 HTTP 통신 허용;
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedMethods(List.of("POST","GET","PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source= new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",configuration);
        return source;

    }

    /*
    SpringSecurityFilter 등록
    JwtAuthenticationFilter, JwtVerificationFilter
    이 클래스는 JwtAuthenticationFilter와 JwtVerificationFilter를 등록하는 역할
    JwtAuthenticationFilter는 JWT 토큰을 이용하여 사용자를 인증하는 필터
    JwtVerificationFilter는 JWT 토큰의 유효성을 검증하는 필터

     */
    public class CustomFilterConfigurer1 extends AbstractHttpConfigurer<CustomFilterConfigurer1, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtTokenizer, authenticationManager);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, userDetailsService);

            builder.addFilter(jwtAuthenticationFilter);
            builder.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }



}
