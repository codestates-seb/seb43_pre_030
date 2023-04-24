package seb43_pre_030.DevHelp.domain.tag.entity;

import lombok.*;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity;

import javax.persistence.*;

@Entity
@Table(name = "question_tag")
@Getter
@Setter
@NoArgsConstructor
public class QuestionTag {

    @EmbeddedId
    private QuestionTagId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("questionId")
    private QuestionEntity question;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("tagId")
    private TagEntity tag;

    public QuestionTag(QuestionEntity question, TagEntity tag) {
        this.question = question;
        this.tag = tag;
        this.id = new QuestionTagId(question.getId(), tag.getId());
    }
}
