package seb43_pre_030.DevHelp.domain.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
public class TagDto extends TagEntity {
    private String name;
    public TagDto() {}

    public TagDto(Long id, String name) {
        super(String.valueOf(id));
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}







