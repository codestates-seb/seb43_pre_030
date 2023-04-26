package seb43_pre_030.DevHelp.domain.QuestionTag;

import lombok.*;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class QuestionTagId implements Serializable {

    private Long questionId;
    private Long tagId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QuestionTagId)) return false;
        QuestionTagId that = (QuestionTagId) o;
        return Objects.equals(getQuestionId(), that.getQuestionId()) && Objects.equals(getTagId(), that.getTagId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getQuestionId(), getTagId());
    }
}