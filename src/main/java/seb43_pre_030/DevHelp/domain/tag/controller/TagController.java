package seb43_pre_030.DevHelp.domain.tag.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb43_pre_030.DevHelp.domain.tag.dto.TagDto;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.lang.reflect.Type;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;


@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/tags")
public class TagController {

    private final TagService tagService;
    private final ModelMapper modelMapper;

    @GetMapping
    public List<TagDto> getAllTags() {
        List<TagDto> tags = tagService.getAllTags();
        Type listType = new TypeToken<List<TagDto>>() {}.getType();
        List<TagDto> TagDto = modelMapper.map(tags, listType);
        return TagDto;
    }

    @GetMapping("/{id}")
    public TagDto getTagById(@PathVariable Long id) {
        TagEntity tagEntity = tagService.getTagById(id);
        TagDto tagDto = modelMapper.map(tagEntity, TagDto.class);
        return tagDto;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TagDto createTag(@RequestBody TagCreateRequest request) {
        TagEntity tagEntity = modelMapper.map(request, TagEntity.class);
        TagEntity savedTagEntity = tagService.createTag(tagEntity);
        TagDto tagDto = modelMapper.map(savedTagEntity, TagDto.class);
        return tagDto;
    }

    @PutMapping("/{id}")
    public TagDto updateTag(@PathVariable Long id, @RequestBody TagUpdateRequest request) {
        TagEntity tagEntity = modelMapper.map(request, TagEntity.class);
        TagEntity updatedTagEntity = tagService.updateTag(id, tagEntity);
        TagDto tagDto = modelMapper.map(updatedTagEntity, TagDto.class);
        return tagDto;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTag(@PathVariable Long id) {
        tagService.deleteTag(id);
        return ResponseEntity.ok().build();
    }

    private class TagCreateRequest {
    }

    private class TagUpdateRequest {
    }
}
