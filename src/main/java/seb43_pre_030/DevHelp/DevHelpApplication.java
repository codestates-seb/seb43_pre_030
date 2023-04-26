package seb43_pre_030.DevHelp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"seb43_pre_030.DevHelp.domain.tag.mapper"})
public class DevHelpApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevHelpApplication.class, args);
	}

}
