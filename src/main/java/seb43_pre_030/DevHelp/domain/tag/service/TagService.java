package seb43_pre_030.DevHelp.domain.tag.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionTag;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;
import seb43_pre_030.DevHelp.exception.BusinessLogicException;
import seb43_pre_030.DevHelp.exception.ExceptionCode;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class TagService {
    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> createByTagName(List<String> tagNames) {
        return tagNames.stream()
                .filter(tag -> !tag.isEmpty())
                .map(String::trim)
                .map(tag -> new Tag(tag))
                .map(this::verifyTag)
                .collect(Collectors.toList());
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    public List<Tag> findTags(List<QuestionTag> questionTagList){

        return questionTagList.stream()
                .map(questionTag -> {
                    Optional<Tag> findTag = tagRepository.findById(questionTag.getTag().getTagId());
                    return findTag.orElseThrow(() ->
                            new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
                })
                .collect(Collectors.toList());
    }

    private Tag verifyTag(Tag tag) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());

        return optionalTag.orElseGet(() -> tagRepository.save(tag));
    }
}
