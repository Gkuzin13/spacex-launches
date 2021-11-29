import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to='/'>UPCOMING LAUNCH</Link>
        </li>
        <li>
          <Link to='/recent'>RECENT LAUNCH</Link>
        </li>
        <li>
          <Link to='/history'>LAUNCH HISTORY</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
export default Menu;
