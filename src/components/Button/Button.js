import { ButtonStyle } from './Button.styled';

const Button = ({ text, setVideoOpen, videoOpen }) => {
  function onClick() {
    setVideoOpen(!videoOpen);
  }
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
