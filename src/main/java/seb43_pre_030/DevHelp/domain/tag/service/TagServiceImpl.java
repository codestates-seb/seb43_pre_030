package seb43_pre_030.DevHelp.domain.tag.service;

import org.aspectj.apache.bcel.generic.Tag;
import org.modelmapper.ModelMapper;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import seb43_pre_030.DevHelp.domain.tag.dto.TagDto;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;
import seb43_pre_030.DevHelp.domain.tag.repository.TagRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;
    private final ModelMapper modelMapper;

    public TagServiceImpl(TagRepository tagRepository, ModelMapper modelMapper) {
        this.tagRepository = tagRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<TagDto> getAllTags() {
        List<TagEntity> tagEntities = tagRepository.findAll();
        return tagEntities.stream()
                .map(tagEntity -> modelMapper.map(tagEntity, TagDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TagDto> getTagsByName(List<String> tagNames) {
        List<Tag> tagEntities = tagRepository.findAllByNameIn(tagNames);
        return tagEntities.stream()
                .map(tagEntity -> modelMapper.map(tagEntity, TagDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public TagDto createTag(TagDto tagDto) {
        Optional<TagEntity> tagOptional = tagRepository.findByName(tagDto.getName());
        if (tagOptional.isPresent()) {
            throw new DuplicateKeyException("Tag already exists with name: " + tagDto.getName());
        }

        TagEntity tagEntity = modelMapper.map(tagDto, TagEntity.class);
        TagEntity savedTagEntity = tagRepository.save(tagEntity);
        return modelMapper.map(savedTagEntity, TagDto.class);
    }

    @Override
    public void deleteTag(Long tagId) {
        if (!tagRepository.existsById(tagId)) {
            throw new EntityNotFoundException("Tag not found with ID: " + tagId);
        }

        tagRepository.deleteById(tagId);
    }

    @Override
    public void deleteTags(List<Long> tagIds) {
        List<TagEntity> tagEntities = tagRepository.findAllById(tagIds);
        if (tagEntities.size() != tagIds.size()) {
            throw new EntityNotFoundException("One or more tags not found with IDs: " + tagIds);
        }

        tagRepository.deleteAll(tagEntities);
    }

    @Override
    public void updateTag(Long tagId, TagEntity tagDto) {
        TagEntity tagEntity = tagRepository.findById(tagId)
                .orElseThrow(() -> new EntityNotFoundException("Tag not found with ID: " + tagId));

        Optional<TagEntity> tagOptional = tagRepository.findByName(tagDto.getName());
        if (tagOptional.isPresent() && !tagOptional.get().getId().equals(tagId)) {
            throw new DuplicateKeyException("Tag already exists with name: " + tagDto.getName());
        }

        modelMapper.map(tagDto, tagEntity);
        tagRepository.save(tagEntity);
    }

    @Override
    public TagEntity getTagById(Long id) {
        return tagRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tag not found with ID: " + id));
    }

    @Override
    public TagEntity createTag(TagEntity tagEntity) {
        Optional<TagEntity> tagOptional = tagRepository.findByName(tagEntity.getName());
        if (tagOptional.isPresent()) {
            throw new DuplicateKeyException("Tag already exists with name: " + tagEntity.getName());
        }

        return tagRepository.save(tagEntity);
    }
}
