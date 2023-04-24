package seb43_pre_030.DevHelp.domain.tag.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import seb43_pre_030.DevHelp.domain.tag.entity.TagEntity;

public interface TagRepository extends JpaRepository<TagEntity, Long> {
    Page<TagEntity> findAll(Pageable pageable);
}