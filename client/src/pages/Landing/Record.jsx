import styled from "styled-components";

const RecordContainer = styled.div`
  margin-bottom: 15rem;
  max-width: 948px;
  display: flex;

  div {
    flex: 1;
    text-align: center;
    color: #9ea6ac;
    padding: 0 2rem;

    span {
      line-height: 1.3rem;
    }

    h2 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: block;
    div {
      margin-bottom: 2rem;
    }
  }
`;

function Record() {
  return (
    <RecordContainer>
      <div>
        <h2>100+ million</h2>
        <span>monthly visitors to Stack Overflow & Stack Exchange</span>
      </div>
      <div>
        <h2>45.1+ billion</h2>
        <span>Times a developer got help since 2008</span>
      </div>
      <div>
        <h2>191% ROI</h2>
        <span>from companies using Stack Overflow for Teams</span>
      </div>
      <div>
        <h2>5,000+</h2>
        <span>Stack Overflow for Teams instances active every day</span>
      </div>
    </RecordContainer>
  );
}
export default Record;
