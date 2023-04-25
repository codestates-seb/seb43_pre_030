package seb43_pre_030.DevHelp.domain.tag.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb43_pre_030.DevHelp.domain.question.entity.QuestionEntity;

import java.util.ArrayList;
import java.util.List;



@Entity
@Table(name = "tag")
@Getter
@Setter
@NoArgsConstructor
public class TagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String name;

    @OneToMany
    @JoinColumn(name ="tag.id")
    private List<QuestionEntity> questions = new ArrayList<>();

    public TagEntity(String name) {
        this.name = name;
    }

    public void addQuestion(QuestionEntity question) {
        questions.add(question);
        question.getTags().add(this);
    }

    public void removeQuestion(QuestionEntity question) {
        questions.remove(question);
        question.getTags().remove(this);
    }
}