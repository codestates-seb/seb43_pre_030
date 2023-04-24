package seb43_pre_030.DevHelp.auth.mail;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;


// 이메일을 보내는 서비스를 제공
@Service
public class MailSenderService {

    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;

    public MailSenderService(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    // 비동기 방식으로 입력된 이메일 주소로 이메일을 보냅니다.
    // 이메일 내용은 이메일 템플릿 엔진을 사용하여 동적으로 생성됩니다.
    @Async
    void sendEmail(String receiverEmail, String link) throws MessagingException {

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setSubject("Complete Registration With Stack Overflow by SEB42PRE22");
        helper.setTo(receiverEmail);


        Context context = new Context();
        context.setVariable("link", link);

        String html = templateEngine.process("email", context);
        helper.setText(html, true);

        javaMailSender.send(message);

    }
}
