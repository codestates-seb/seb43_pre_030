package seb43_pre_030.DevHelp.domain.tag.repository;

import org.aspectj.apache.bcel.generic.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<TagEntity, Long> {

    Optional<TagEntity> findByName(String name);

    List<Tag> findAllByNameIn(List<String> tagNames);
}