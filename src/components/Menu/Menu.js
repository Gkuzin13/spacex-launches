import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to='/' onClick={() => setOpen(false)}>
            NEXT LAUNCH
          </Link>
        </li>
        <li>
          <Link to='/latest' onClick={() => setOpen(false)}>
            LATEST LAUNCH
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
