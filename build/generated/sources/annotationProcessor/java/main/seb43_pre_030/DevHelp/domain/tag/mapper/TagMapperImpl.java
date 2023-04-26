package seb43_pre_030.DevHelp.domain.tag.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb43_pre_030.DevHelp.domain.tag.dto.TagPostDto;
import seb43_pre_030.DevHelp.domain.tag.dto.TagResponseDto;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-26T14:59:01+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public TagResponseDto tagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        tagResponseDto.setTagId( tag.getTagId() );
        tagResponseDto.setTagName( tag.getTagName() );

        return tagResponseDto;
    }

    @Override
    public List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagResponseDto( tag ) );
        }

        return list;
    }

    @Override
    public List<TagPostDto> tagsToTagPostDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagPostDto> list = new ArrayList<TagPostDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagPostDto( tag ) );
        }

        return list;
    }

    protected TagPostDto tagToTagPostDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagPostDto tagPostDto = new TagPostDto();

        tagPostDto.setTagName( tag.getTagName() );

        return tagPostDto;
    }
}
