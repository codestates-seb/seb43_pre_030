package seb43_pre_030.DevHelp.domain.tag.mapper;

import org.mapstruct.Mapper;
import seb43_pre_030.DevHelp.domain.tag.dto.TagDto;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToResponse(List<TagEntity> tags);
}