import styled from 'styled-components';

const FooterEl = styled.footer`
  background-color: hsl(210, 8%, 15%);            // 홈페이지 꺼 따라함
  color: hsl(210, 8%, 60%);                       // 홈페이지 꺼 따라함
  .footerFrame {
    position: relative;
    max-width: 79rem;
    height: 20.125rem;
    margin: 0 auto;
    padding: 2rem 0.75rem 0.75rem 0.75rem;
    box-sizing: border-box;
    display: flex;
    .footerLogo {
      flex: 0 0 4rem;
      margin: -0.75rem 0 2.25rem 0;
    }
    .footerNav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
      .navContents {
        box-sizing: border-box;
        flex: 1 0 auto;
        padding:0 0.75rem 1.5rem 0;
        .titleNavFt {
          margin-bottom: 0.75rem;
        }
        .navTitle a {
          text-transform: uppercase;               //대문자로
          font-weight: bold;
          margin-bottom: var(--su12);
          color: hsl(210,8%,75%);
          font-size: 0.8125rem;
          line-height: var(--lh-md);
          
        }
        .navList a {
          color: hsl(210, 8%, 60%);                // 홈페이지 꺼 따라함
          padding: 0.125rem 0;
          display: inline-block;
          vertical-align: top;
          font-size: 0.8125rem;
          padding: 0.25rem 0;
        }
      }
    }
    .copyright {
      flex: 1 1 9.375rem;
      display: flex;
      flex-direction: column;
      .listCopy {
        display: flex;
        li + li {
          margin-left: 0.75rem;
        }
        .linkCopy {
          color: hsl(210, 8%, 60%);                // 홈페이지 꺼 따라함
          padding: 0.25rem 0;
          display: inline-block;
          vertical-align: top;
          font-size: 0.6875rem;
        }
      }
      p {
        margin: auto 0 1.5rem;
        font-size: 0.6875rem;                       //두줄로 보이기위해서..
      }
    }
  }
  .navTitle{
    padding: 0 0 0.75rem 0;
  }
  .mt16{
    margin-top: 1rem;
  }
`;

function Footer() {
  return (
    <FooterEl>
      <div className="footerFrame">
        <div className="footerLogo">
          <a href="#none" aria-label="Stack Overflow">
            <svg aria-hidden="true" width="32" height="37" viewBox="0 0 32 37">
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
              <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"/>
            </svg>
          </a>
        </div>
        <nav className="footerNav">
          <div className="navContents">
            <h5 className="navTitle">
              <a href="#none">Stack Overflow</a>
            </h5>
            <ul className="navList">
              <li>
                <a href="#none">Questions</a>
              </li>
              <li>
                <a href="#none">Help</a>
              </li>
            </ul>
          </div>
          <div className="navContents">
            <h5 className="navTitle">
              <a href="#none">Products</a>
            </h5>
            <ul className="navList">
              <li>
                <a href="#none" className="js-gps-track -link">Teams</a>
              </li>
              <li>
                <a href="#none" className="js-gps-track -link">Advertising</a>
              </li>
              <li>
                <a href="#none" className="js-gps-track -link">Collectives</a>
              </li>
              <li>
                <a href="#none" className="js-gps-track -link">Talent</a>
              </li>
            </ul>
          </div>
          <div className="navContents">
            <h5 className="navTitle">
              <a href="#none">Company</a>
            </h5>
            <ul className="navList">
              <li>
                <span href="#none">About</span>
              </li>
              <li>
                <a href="#none">Press</a>
              </li>
              <li>
                <a href="#none">Work Here</a>
              </li>
              <li>
                <a href="#none">Legal</a>
              </li>
              <li>
                <a href="#none">Privacy Policy</a>
              </li>
              <li>
                <a href="#none">Terms of Service</a>
              </li>
              <li>
                <a href="#none">Contact Us</a>
              </li>
              <li>
                <a href="#none">Cookie Settings</a>
              </li>
              <li>
                <a href="#none">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="navContents site-footer--categories-nav">
            <div>
              <h5 className="navTitle">
                <a href="#none">Stack Exchange Network</a>
              </h5>
              <ul className="navList">
                <li>
                  <a href="#none">Technology</a>
                </li>
                <li>
                  <a href="#none">Culture &amp; recreation</a>
                </li>
                <li>
                  <a href="#none">Life &amp; arts</a>
                </li>
                <li>
                  <a href="#none">Science</a>
                </li>
                <li>
                  <a href="#none">Professional</a>
                </li>
                <li>
                  <a href="#none">Business</a>
                </li>
                <li className='mt16'>
                  <a href="#none" >API</a>
                </li>
                <li>
                  <a href="#none">Data</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="copyright">
          <ul className="listCopy">
            <li>
              <a className="linkCopy" href="https://stackoverflow.blog?blb=1">Blog</a>
            </li>
            <li>
              <a className="linkCopy" href="https://www.facebook.com/officialstackoverflow/">Facebook</a>
            </li>
            <li>
              <a className="linkCopy" href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a className="linkCopy" href="https://linkedin.com/company/stack-overflow">LinkedIn</a>
            </li>
            <li>
              <a className="linkCopy" href="https://www.instagram.com/thestackoverflow">Instagram</a>
            </li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under{' '}
            <span>
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
            </span>
            . <span>rev 2023.4.14.43390</span>
          </p>
        </div>
      </div>
    </FooterEl>
  );
}

export default Footer;
