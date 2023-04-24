package seb43_pre_030.DevHelp.utils;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriUtil {

    public static URI createUri(String defaultUrl, long resourceId) {
        return UriComponentsBuilder.newInstance()
                .path(defaultUrl + "/{resource-id}")
                .buildAndExpand(resourceId)
                .toUri();
    }

//    private static final String BASE_URI = "/api";
//    public URI createUriWithId(String uri, Long id) {
//        return UriComponentsBuilder
//                .fromPath(BASE_URI)
//                .path(uri)
//                .path("/{id}")
//                .buildAndExpand(id)
//                .toUri();
//    }
//
//    public URI createUri(String uri) {
//        return UriComponentsBuilder
//                .fromPath(BASE_URI)
//                .path(uri)
//                .build()
//                .toUri();
//    }

    /*
    * 이 클래스는 스프링의 @Component 어노테이션을 사용하여 빈으로 등록됩니다.
    * createUriWithId 메소드는 URI와 ID를 받아 ID가 포함된 URI를 생성합니다.
    * createUri 메소드는 URI를 받아서 새로운 URI를 생성합니다.
    * 이 두 메소드는 UriComponentsBuilder 클래스를 사용하여 URI를 생성합니다.
    * UriComponentsBuilder 클래스는 URI를 생성하기 위한 다양한 메소드를 제공합니다.
    * 이 코드에서는 fromPath, path, buildAndExpand, build, toUri 메소드를 사용합니다.

      컨트롤러에서는 이렇게 생성된 URI를 사용하여 응답 본문에 location 헤더를 설정하고
      클라이언트가 생성된 리소스의 URI를 쉽게 찾을 수 있도록 합니다.
    *
    * */

}
