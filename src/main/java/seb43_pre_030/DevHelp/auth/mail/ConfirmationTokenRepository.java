package seb43_pre_030.DevHelp.auth.mail;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


// ConfirmationToken 엔티티의 데이터를 처리하는 데 사용
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, String> {
    Optional<ConfirmationToken> findByIdAndExpired(String confirmationTokenId, boolean b);
}
