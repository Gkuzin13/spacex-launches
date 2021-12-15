import { ArrowWrapper } from './ArrowDown.styled';
import { DownOutlined } from '@ant-design/icons';
import useScrollPosition from '../../hooks/useScrollPosition';

const ArrowDown = ({ height }) => {
  const { scrollY } = useScrollPosition();
  const opacity = 1 - (scrollY / height / 0.8).toFixed(2) || 0;

  return (
    <ArrowWrapper opacity={opacity}>
      <DownOutlined />
    </ArrowWrapper>
  );
};

export default ArrowDown;
