import { useEffect, useState } from "react";

export function useDropDown(init = false) {
  const [dropDown, setDropDown] = useState(init);

  const actionFunction = () => {
    setDropDown(false);
  };
  const onItemClick = e => {
    e.stopPropagation();
    setDropDown(prev => !prev);
  };
  const onOutSideClick = () => {
    if (dropDown) setDropDown(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener("click", onOutSideClick);
    return () => {
      window.removeEventListener("click", onOutSideClick);
    };
  }, [dropDown]);

  return [dropDown, actionFunction, onItemClick];
}
