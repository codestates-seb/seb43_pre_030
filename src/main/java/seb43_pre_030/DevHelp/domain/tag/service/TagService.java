package seb43_pre_030.DevHelp.domain.tag.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.tag.dto.TagDto;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.util.List;

@Service
@Transactional
public interface TagService {

    List<TagDto> getAllTags();

    List<TagDto> getTagsByName(List<String> tagNames);

    TagDto createTag(TagDto tagDto);

    void deleteTag(Long tagId);

    void deleteTags(List<Long> tagIds);

    TagEntity updateTag(Long tagId, TagEntity tagDto);

    TagEntity getTagById(Long id);

    TagEntity createTag(TagEntity tagEntity);
}
