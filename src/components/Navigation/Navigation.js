import { useRef, useState } from 'react';
import { NavStyle, NavWrapper, LogoWrapper } from './Navigation.styled';
import { RocketFilled } from '@ant-design/icons';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import useClickOutside from '../../hooks/useClickOutside';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useClickOutside(node, () => setOpen(false));
  const { width, height } = useWindowSize();
  const { scrollY } = useScrollPosition();
  const halfScreenScroll = scrollY <= height - height;

  return (
    <NavWrapper halfScreenScroll={halfScreenScroll}>
      <LogoWrapper>
        <a href='/'>
          <RocketFilled style={{ fontSize: '32px' }} />
        </a>
      </LogoWrapper>
      {width > 768 ? (
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
      ) : (
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      )}
    </NavWrapper>
  );
};

export default Navigation;
