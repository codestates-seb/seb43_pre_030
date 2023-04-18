import SearchHintItem from "./SearchHintItem";
import { StyledDropDown } from "../../styles/StyledDropDown";

function SearchHint() {
  const hints = {
    "[tag]": "search within a tag",
    "user:1234": "search by author",
    '"words here"': "exact phrase",
    'collective:"Name"': "collective content",
    "answers:0": "unanswered questions",
    "score:3": "posts with a 3+ score",
    "is:question": "type of post",
    "isaccepted:yes": "search within status",
  };
  return (
    <StyledDropDown>
      {Object.entries(hints).map(([k, v]) => (
        <SearchHintItem key={k} keyText={k} valueText={v} />
      ))}
    </StyledDropDown>
  );
}

export default SearchHint;
