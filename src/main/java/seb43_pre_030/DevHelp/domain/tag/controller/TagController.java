package seb43_pre_030.DevHelp.domain.tag.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb43_pre_030.DevHelp.domain.tag.dto.TagResponseDto;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;
import seb43_pre_030.DevHelp.domain.tag.mapper.TagMapper;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.response.ApiResponse;

import java.util.List;

@RestController
@RequestMapping("/tags")
@Validated
public class TagController {
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity getAllTags() {
        List<Tag> tagList = tagService.getAllTags();
        List<TagResponseDto> response = mapper.tagsToTagResponseDtos(tagList);

        return ResponseEntity.ok().body(ApiResponse.ok("data", response));
    }
}
