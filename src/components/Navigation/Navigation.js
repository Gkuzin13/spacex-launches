import { useState } from 'react';
import { NavStyle } from './Navigation.styled';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span>LOGO</span>
      <NavStyle>
        <ul>
          <li>UPCOMING LAUNCH</li>
          <li>RECENT LAUNCH</li>
          <li>LAUNCH HISTORY</li>
        </ul>
      </NavStyle>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navigation;
