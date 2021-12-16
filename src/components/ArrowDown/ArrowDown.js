import { ArrowWrapper } from './ArrowDown.styled';
import { DownOutlined } from '@ant-design/icons';
import useScrollPosition from '../../hooks/useScrollPosition';

const ArrowDown = ({ height }) => {
  const { scrollY } = useScrollPosition();
  const opacity = 1 - (scrollY / height / 0.85).toFixed(2);

  return (
    <ArrowWrapper opacity={opacity > 0 ? opacity : 0}>
      <DownOutlined />
    </ArrowWrapper>
  );
};

export default ArrowDown;
