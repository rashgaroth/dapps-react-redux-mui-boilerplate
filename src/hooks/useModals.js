import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  // for error modal
  const [errMsg, setErrMsg] = useState('');
  const [titleMsg, setTitleMsg] = useState('');
  // for loader
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const setLoader = load => {
    setIsLoading(load);
  };

  const setModalMessage = (title = 'Some Error Occured', desc = '') => {
    setErrMsg(desc);
    setTitleMsg(title);
  };

  return {
    isShowing,
    toggle,
    errMsg,
    titleMsg,
    setModalMessage,
    isLoading,
    setLoader,
  };
};

export default useModal;
