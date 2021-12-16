import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = ({ open, setOpen }) => {
  useEffect(() => {
    const closeMenu = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', closeMenu);
    return () => window.removeEventListener('scroll', closeMenu);
  }, [setOpen]);

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
          <Link to='/stats' onClick={() => setOpen(false)}>
            STATISTICS
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
export default Menu;
