package seb43_pre_030.DevHelp.domain.tag.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb43_pre_030.DevHelp.domain.tag.mapper.TagMapper;
import seb43_pre_030.DevHelp.domain.tag.service.TagService;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestParam;


import javax.validation.constraints.Positive;


@RestController
@RequestMapping("Tags")
@Validated
@AllArgsConstructor
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;

    @GetMapping
    public ResponseEntity getTags(@RequestParam(name = "tagName") String tagName,
                                  @Positive @RequestParam(name = "page", defaultValue = "1") int page,
                                  @Positive @RequestParam(name = "page", defaultValue = "15") int size) {
        Page<TagEntity> pageTag =
                tagService.findTags(page -1 , size);
        List<TagEntity> tags = pageTag.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(tagMapper.tagToResponse(tags), pageTag), HttpStatus.OK);
    }
}