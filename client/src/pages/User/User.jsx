import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import Button from "../../components/ui/Button";
import { elapsedText } from "../../utils/elapsedText";

const StyledUser = styled.div`
  width: 100%;
  min-height: calc(100vh - 63px);

  .container {
    position: relative;
    margin-bottom: 1.142rem;
    box-sizing: inherit;
    text-align: left;
    display: flex;
  }
  .userLogo {
    margin: 0.571rem;
    border-radius: 0.285rem;
    box-sizing: inherit;
  }
  .userProfile {
    margin: 0.571rem;
    box-sizing: inherit;
  }
  .editButton {
    position: absolute;
    display: flex;
    right: 0;
    top: 1rem;
    border-color: black;
  }
  .editBt {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }

  .userName {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -0.285rem;
  }
  .userNaming {
    height: 2.428rem;
    margin: 0.285rem;
    line-height: 0.0714rem;
    font-size: 2.61538461rem;
    margin-bottom: 0.857rem;
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }
  .userInfo {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .userTop {
    /* width: 100%; */
    height: 4.857rem;
  }
  .itemContents {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.928rem;
  }
  .item {
    margin: 0.285rem;
    display: flex;
  }
`;
const EditButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
});

function User() {
  const currentUser = useSelector(s => s.user);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledUser>
      <div className="container">
        <div className="header">
          <div className="userLogo">
            <img
              src="https://www.gravatar.com/avatar/b898efbb2cb1b3498a9c9177fb098121?s=256&amp;d=identicon&amp;r=PG&amp;f=y&amp;so-version=2"
              alt="SEB_FE_43_유호균's user avatar"
              width="128"
              height="128"
              className="userLogo"
            />
          </div>
          <div className="userTop">
            <div className="userProfile">
              <div className="userName">
                <div className="userNaming">{currentUser.name}</div>
              </div>
            </div>
            <div className="userInfo">
              <div className="items">
                <div className="item">
                  <div className="itemContents">
                    <div className="item1Logo">
                      <svg aria-hidden="true" className="svg-icon iconCake" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z" />
                      </svg>
                    </div>
                    <span>Member for</span>
                    <span>{elapsedText(new Date(currentUser.created_at))}</span>
                  </div>
                </div>
              </div>
              {/* <div className="items">
                <div className="item">
                  <div className="item2Logo">
                    <svg aria-hidden="true" className="svg-icon iconClock" width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z" />
                    </svg>
                  </div>
                  <div className="itemContents">
                    Last seen
                    <div className="lastSeen"> this week</div>
                  </div>
                </div>
              </div> */}
              {/* <div className="items">
                <div className="item">
                  <div className="item3Logo">
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconCalendar"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z" />
                    </svg>
                  </div>
                  <div className="itemContents">
                    Visited 6 days,
                    <div className="visited">3 consecutive</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="editButton">
          <EditButton className="editBt">
            <div className="editBt">
              <svg aria-hidden="true" className="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18">
                <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z" />
              </svg>
              Edit profile
            </div>
          </EditButton>
        </div>
      </div>
      {/* <div className="editButton">
        <svg aria-hidden="true" className="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18">
          <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z" />
        </svg>
        <EditButton className="editBt">Edit profile</EditButton>
      </div> */}
      {/* {questions && questions.map(question => <MainItem data={question} />)} */}
    </StyledUser>
  );
}

export default User;
