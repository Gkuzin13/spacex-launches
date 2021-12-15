import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';
import useScrollPosition from '../../hooks/useScrollPosition';
import { NavStyle, NavWrapper, LogoWrapper } from './Navigation.styled';
import { ReactComponent as Logo } from '../../assets/rocketIcon.svg';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';

const Navigation = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useClickOutside(node, () => setOpen(false));
  const { scrollY } = useScrollPosition();
  const userScrolled = scrollY > 50;

  return (
    <NavWrapper userScrolled={userScrolled}>
      <LogoWrapper>
        <a href='/'>
          <Logo />
        </a>
      </LogoWrapper>
      {isMobile ? (
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      ) : (
        <NavStyle>
          <ul>
            <li>
              <Link to='/'>NEXT LAUNCH</Link>
            </li>
            <li>
              <Link to='/latest'>LATEST LAUNCH</Link>
            </li>
            <li>
              <Link to='/history'>LAUNCH HISTORY</Link>
            </li>
          </ul>
        </NavStyle>
      )}
    </NavWrapper>
  );
};

export default Navigation;
