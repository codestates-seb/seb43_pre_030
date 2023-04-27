// @ts-check

import { useState } from "react";

/**
 * input 상태를 관리하는 커스텀 훅입니다.
 * @param {*} init - input 창의 초기값 (default: null)
 * @returns {Array} - input 상태, input 값 변경 시 핸들러, input 상태 변경함수
 */
function useInput(init = null) {
  const [value, setValue] = useState(init);

  const onChange = e => {
    setValue(e.target.value);
  };

  return [{ value, onChange }, setValue];
}

export default useInput;
