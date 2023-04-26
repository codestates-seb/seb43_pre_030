import styled from "styled-components";
import lock from "./1.png";
import glass from "./2.png";

const SmallBubbleContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;

  .lSmallBubble,
  .rSmallBubble {
    max-width: 31rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 3rem;
    margin: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    img {
      width: 5rem;
      height: 5rem;
    }

    span {
      color: #232629;
      margin: 1rem;
      line-height: 1.5rem;
    }

    button {
      color: #fff;
      max-width: 14rem;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 0.2rem;
    }

    a {
      color: #535b60;
      font-size: 0.8rem;
      text-decoration: underline;
    }
  }

  .lSmallBubble {
    background-color: #fde3cd;
    button {
      background-color: var(--primary-color);
    }
  }

  .rSmallBubble {
    background-color: #cce8fe;
    button {
      background-color: var(--btn-bg-color);
    }
  }

  @media (max-width: 650px) {
    display: block;
    margin-bottom: 4rem;

    .lSmallBubble,
    .rSmallBubble {
      max-width: 100%;
      margin: 2rem;
    }
  }
`;

function SmallBubble() {
  return (
    <SmallBubbleContainer>
      <div className="lSmallBubble">
        <img src={glass} alt="" />
        <span>Find the best answer to your technical question, help others answer theirs</span>
        <button type="button">Join the community</button>
        <a href="/">or search content</a>
      </div>
      <div className="rSmallBubble">
        <img src={lock} alt="" />
        <span>Want a secure, private space for your technical knowledge?</span>
        <button type="button">Discover Teams</button>
      </div>
    </SmallBubbleContainer>
  );
}
export default SmallBubble;
