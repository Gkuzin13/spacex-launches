import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to='/' onClick={() => setOpen(false)}>
            UPCOMING LAUNCH
          </Link>
        </li>
        <li>
          <Link to='/recent' onClick={() => setOpen(false)}>
            RECENT LAUNCH
          </Link>
        </li>
        <li>
          <Link to='/history' onClick={() => setOpen(false)}>
            LAUNCH HISTORY
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
export default Menu;
