import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>
        <span role='img' aria-label='about us'></span>
        UPCOMING LAUNCH
      </a>
      <a href='/'>
        <span role='img' aria-label='price'></span>
        RECENT LAUNCH
      </a>
      <a href='/'>
        <span role='img' aria-label='contact'></span>
        LAUNCH HISTORY
      </a>
      <a href='/'>
        <span role='img' aria-label='contact'></span>
        ABOUT
      </a>
    </StyledMenu>
  );
};
export default Menu;
