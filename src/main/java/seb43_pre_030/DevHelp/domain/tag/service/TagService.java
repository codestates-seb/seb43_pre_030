package seb43_pre_030.DevHelp.domain.tag.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class TagService {
    private TagRepository tagRepository;
    public Page<TagEntity> findTags(int page, int size) {
        return tagRepository.findAll(
                PageRequest.of(page,size,Sort.by("tagId").descending())
        );
    }

}
