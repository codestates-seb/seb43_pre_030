package seb43_pre_030.DevHelp.domain.tag.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import seb43_pre_030.DevHelp.domain.tag.entity.Tag;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    @Override
    @Query("SELECT m FROM Tag m")
    List<Tag> findAll();

    public Optional<Tag> findByTagName(String tagName);
}
