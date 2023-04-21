import { useSelector } from "react-redux";
import styled from "styled-components";
import MainItem from "../Main/MainItem";
import Button from "../../components/ui/Button";

const StyledUser = styled.div`
  width: 100%;
  height: 100%;

  .container {
    position: relative;
    margin-bottom: 16px;
    box-sizing: inherit;
    text-align: left;
    display: flex;
  }
  .userLogo {
    margin: 8px;
    border-radius: 4px;
    box-sizing: inherit;
  }
  .userProfile {
    margin: 8px;
    box-sizing: inherit;
  }
  .editButton {
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    border-color: black;
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
    margin: -4px;
  }
  .userNaming {
    height: 34px;
    margin: 4px;
    line-height: 1px;
    font-size: 2.61538461rem;
    margin-bottom: 12px;
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }
  .userInfo {
    display: flex;
  }
  .userTop {
    /* width: 100%; */
    height: 68px;
  }
  .itemContents {
    display: flex;
    margin: 2px;
    font-size: 13px;
  }
  .item {
    margin: 4px;
    display: flex;
  }
`;

function User() {
  const questions = useSelector(s => s.data);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios("http://localhost:3001/questions");
  //     dispatch(setData(data));
  //     console.log(data);
  //   })();
  // }, []);

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
                <div className="userNaming">SEB_43_XXX</div>
              </div>
            </div>
            <div className="userInfo">
              <div className="items">
                <div className="item">
                  <div className="item1Logo">
                    <svg aria-hidden="true" className="svg-icon iconCake" width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z" />
                    </svg>
                  </div>
                  <div className="itemContents">
                    Member for
                    <span title="2023-04-12 03:02:04Z">9 days</span>
                  </div>
                </div>
              </div>
              <div className="items">
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
              </div>
              <div className="items">
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
              </div>
            </div>
          </div>
        </div>
        <div className="editButton">
          <svg aria-hidden="true" className="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18">
            <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z" />
          </svg>
          <Button className="editBt">Edit profile</Button>
        </div>
      </div>
      {questions && questions.map(question => <MainItem data={question} />)}
    </StyledUser>
  );
}

export default User;
