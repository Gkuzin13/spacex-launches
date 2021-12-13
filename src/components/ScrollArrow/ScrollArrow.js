import useScrollPosition from '../../hooks/useScrollPosition';
import { ArrowWrapper } from './ScrollArrow.styled';

const ScrollArrow = ({ height }) => {
  const { scrollY } = useScrollPosition();
  const scrollHeight = 0.8 - (scrollY / height).toFixed(1) || 0;
  return (
    <ArrowWrapper scrollHeight={scrollHeight}>
      <div></div>
    </ArrowWrapper>
  );
};

export default ScrollArrow;
