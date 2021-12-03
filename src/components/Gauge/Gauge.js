import { Container, Digit } from './Gauge.style';
import calcOffset from '../../utils/calcOffset';

const Gauge = ({ stats, text, midText, percentage }) => {
  const rate = Math.round((stats.success / stats.total) * 100);
  const offset = calcOffset(rate).toString();

  if (!stats) {
    return <></>;
  }

  return (
    <Container offset={offset}>
      <div></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='40 10 100 90'>
        <path
          className='grey'
          d='M 60 95 A 45 45 90 1 1 120 95'
          style={{ fill: 'none' }}
        />
        <path
          className='purple'
          d='M 60 95 A 45 45 90 1 1 120 95'
          style={{ fill: 'none' }}
        />
        <text dominantBaseline='middle' x='50%' y='55%' fill='white'>
          <tspan x='90%' dy='-5%'>
            {text}
          </tspan>
          <tspan x='90%' dy='10%'>
            {midText}
          </tspan>
          <Digit x='90%' dy='20%'>
            {percentage ? rate + `%` : stats.success + `/` + stats.total}
          </Digit>
        </text>
      </svg>
    </Container>
  );
};

export default Gauge;
