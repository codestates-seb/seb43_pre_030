import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import TipBox from "./TipBox";
import VersatileBlueButton from "./VersatileBlueButton";
import ContentBlocker from "./ContentBlocker";


const VersatileFormWrapper = styled.div`
  position: relative;
`
const VersatileFormContainer = styled.div`
  position: relative;
  width: 70%;
  border: 1px solid var(--question-page-form-border-color);
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 1.5rem;
  margin-top: 1rem;

  h1{
    font-size: 1.2rem;
    font-weight: bolder;
    margin-bottom: 0.3rem;
  }


  input{
    width: 100%;
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid ${props => props.isTitleOk ? '#BABFC4' : '#DE4F54'};
    box-shadow: ${props => props.isTitleOk ? 'none' : '0 0 0 0.2rem #ffd7d8'};;
    outline: none;
  }

  input:focus{
    border: 1px solid ${props => props.isTitleOk ? '#59A4DE' : '#DE4F54'};
    box-shadow: 0 0 0 0.2rem ${props => props.isTitleOk ? '#59a4de30' : '#ffd7d8'};
  }

  .buttonDiv{
    display: inline-block;
    position: relative;
  }

  .isTitleOk{
    color: #DE4F54;
    display: block;
    margin-bottom: 1rem;
  }
  .exclamationMark{
    position: absolute;
    top: 5.3rem;
    right: 2.3rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 50%;
    background-color: #DE4F54;
    color: #fff;
    font-weight: bold;
  }

  .tagContainer:focus{
    border: 1px solid ${props => props.isTitleOk ? '#59A4DE' : '#DE4F54'};
    box-shadow: 0 0 0 0.2rem ${props => props.isTitleOk ? '#59a4de30' : '#ffd7d8'};
  }

  .tagContainer{
    display:flex;
    width: 100%;
    border: 1px solid#BABFC4;
    padding: 0 0.2rem;
    margin: 0.6rem 0 0.6rem 0;

    input{
        border: none;
        box-shadow:none;
      }

    .tagDiv{

      ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;

        li{
          border-radius: 0.2rem;
          overflow: hidden;
          background-color: #E1ECF4;
          color: #3A749D;
          letter-spacing: 0.1rem;
          margin: 0.2rem;
          padding: 0.2rem 0.4rem;
          
          button{
            background-color: #E1ECF4;
            color: #3A749D;
            font-weight:bold;
            border: none;
            cursor: pointer;
          }
        }
      }
    }

    input{
      flex: 1;
    }
  }



  @media (max-width: 1024px){
    width: 100%;
  }
`


function VersatileForm({idx, el, askController}) {

  // 받아온 프롭스 구조분해 할당
  const { title, content, placeholder, isDoneYet, isButtonBlocked, isFormBlocked, tipTitle, tipContent } = el;
  const { currentForm, focusForm, changeWord, postValue, setPostValue} = askController;

  // 폼 value 관리 state
  const [QuestionFormValue, setQuestionFormValue] = useState(``)
  
  // 타이틀 검사 state
  const [ isTitleOk, setTitle ] = useState(true);

  const setData = (data) => {
    switch (title) {
      case `Title`:
        setPostValue({ ...postValue, title: data });
        break;
      case `What are the details of your problem?`:
        setPostValue({ ...postValue, body1: data });
        break;
      case `What did you try and what were you expecting?`:
        setPostValue({ ...postValue, body2: data });
        break;
      case `Tags`:
        setPostValue({ ...postValue, tag: data });
        break;
      default:
        break;
    }
  }

  // 일반 폼 value 설정
  const setFormValue = (e) => {
    setQuestionFormValue(e.target.value)
    setData(e.target.value)
  }

  // 작성 폼 value 설정
  const setMDValue = (e) => {
    setQuestionFormValue(e)
    changeWord(idx, QuestionFormValue);
    setData(e)
  }

  const focusOut = () => {
    if(QuestionFormValue.length < 15){
      setTitle(false)
    } else {
      setTitle(true)
    }
  }

  // 버튼 제어 
  const nextButton = !isDoneYet ? <VersatileBlueButton text={idx === 4 ? `Post your question` : `Next`} idx={idx} askController={askController} data={postValue}/> : null;
  const formBlocker = isFormBlocked ? <ContentBlocker /> : null;
  const buttonBlocker = isButtonBlocked ? <ContentBlocker /> : null;

  const [tags, setTags] = useState([]);

  function handleInput(e) {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      setQuestionFormValue("");
      setData(tags)
    }
  }

  function handleDelete(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }


  // 일반 박스일 때
  let box = (
    <input
      type="text"
      placeholder={placeholder}
      value={QuestionFormValue}
      onChange={(e) => setFormValue(e)}
      onFocus={() => focusForm(idx)}
      onBlur={idx === 1 ? () => focusOut() : null}
    />
  );

    // 편집 박스 일 때
    const isEditBox = idx === 2 || idx === 3;
    if (isEditBox) {
      box = (
        <div data-color-mode="light">
          <MDEditor
            className="MDEditor"
            value={QuestionFormValue}
            onChange={setMDValue}
            onFocus={() => focusForm(idx)}
          />
        </div>
      );
    }

  // 태그 박스일 때
  const isTagBox = title === 'Tags';
  if (isTagBox) {
    box = (
      <div className="tagContainer">
        <div className="tagDiv">
          <ul>
            {tags.map((tag, idx) => (
              <li key={idx}>
                {tag} <button type="button" onClick={() => handleDelete(tag)}>x</button>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={QuestionFormValue}
          onKeyDown={handleInput}
          onChange={(e) => setFormValue(e)}
          onFocus={() => focusForm(idx)}
          onBlur={idx === 1 ? () => focusOut() : null}
        />
      </div>
    );
  }
  

  


  return (

    <VersatileFormWrapper>
      {currentForm === idx ? <TipBox tipTitle={tipTitle} tipContent={tipContent} /> : null}    
      <VersatileFormContainer isTitleOk={isTitleOk}>

        {/* 블럭박스 */}
        {formBlocker}

        {/* 제목 */}
        <h1>{title}</h1>

        {/* 콘텐츠 */}
        {content ? content.split(`\n`).map((innerEl, index) => (<div key={index}>{innerEl}</div>)) : null}

        {/* 폼 */}
        {box}

        {
        // 제목의 글자수가 15글자 미만일 때
        !isTitleOk ? (
        <>
          <span className="isTitleOk">Title must be at least 15 characters.</span>
          <span className="exclamationMark">!</span>
        </>
        ) : null}

        {
        // 클릭된 페이지에만 버튼이 보일 수 있도록
        currentForm === idx ? (
            <div className="buttonDiv">
              {buttonBlocker}
              {nextButton}
            </div>
        ) : null}    
      </VersatileFormContainer>
    </VersatileFormWrapper>

  );
  
}

export default VersatileForm;
