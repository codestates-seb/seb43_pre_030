package seb43_pre_030.DevHelp.domain.tag.mapper;


import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import seb43_pre_030.DevHelp.domain.tag.dto.TagPostDto;
import seb43_pre_030.DevHelp.domain.tag.dto.TagResponseDto;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;

import java.util.List;

@Mapper(componentModel = "spring")
@Component
public interface TagMapper {
    TagResponseDto tagToTagResponseDto(Tag tag);

    List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags);

    List<TagPostDto> tagsToTagPostDtos(List<Tag> tags);
}
