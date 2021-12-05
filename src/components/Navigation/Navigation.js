import { useRef, useState } from 'react';
import { NavStyle, NavWrapper } from './Navigation.styled';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import useClickOutside from '../../hooks/useClickOutside';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useClickOutside(node, () => setOpen(false));

  return (
    <NavWrapper>
      <div>
        <a href='/'>SpaceX</a>
      </div>
      <NavStyle>
        <ul>
          <li>
            <Link to='/'>NEXT LAUNCH</Link>
          </li>
          <li>
            <Link to='/latest'>RECENT LAUNCH</Link>
          </li>
          <li>
            <Link to='/history'>LAUNCH HISTORY</Link>
          </li>
        </ul>
      </NavStyle>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </NavWrapper>
  );
};

export default Navigation;
