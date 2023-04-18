import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #f48225; // 포인트 색상
    --btn-bg-color: #0a95ff; // 기본 버튼 배경 색상
    --btn-github-bg-color: #2f3337; // 깃헙버튼 색상
    --btn-facebook-bg-color: #385499; // 페북버튼 색상
    --al-color: #0074cc; // 기본 a 링크 색상
    --font-color-light: #525960; // 연한 폰트 기본 색상
    --font-color-bold:#0c0d0e; // 진한 폰트 기본 색상
    --tag-bg-color: #e1ecf4; // 태그 배경 색상
    --tag-font-color: #39739d; // 태그 폰트 색상
    --aside-bg-bold: #fcf2d4; // 진한 사이드 배경 색상
    --aside-bg-light: #fdf6e2; // 연한 사이드 배경 색상
    --border-default-color: #d6d9dc; // 보더 기본 색상


    //questionPage 색상
    --question-page-bg-color: #F8F9F9;// questionPage 배경 색상
    --question-page-form-border-color: #E3E6E8;// 폼 테두리 색상 
    --question-tip-box-bg-color: #EBF4FA;// 파란박스 배경 색상
    --question-tip-box-border-color: #A5CFED;// 파란박스 테두리 색상
    --question-foem-focus-color: #59A4DE;// 포커스 테두리 색상

  }
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  a:visited{
    color: inherit;
  }
  html{
    font-size: 14px;
  }
`;
