import { Container, Digit } from './Gauge.style';
import calcOffset from '../../utils/calcOffset';
import { useEffect, useState } from 'react';

const Gauge = ({ stats, text, midText, percentage }) => {
  const [successCount, setSuccessCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [percentCount, setPercentCount] = useState(0);

  const percent = Math.round((stats.success / stats.total) * 100);
  const offset = calcOffset(percent).toString();

  useEffect(() => {
    const successCounter = setInterval(() => {
      const newCount = successCount + 1;
      setSuccessCount(newCount);
    }, 5);
    const totalCounter = setInterval(() => {
      const newCount2 = totalCount + 1;
      setTotalCount(newCount2);
    }, 2);
    const percentCounter = setInterval(() => {
      const newCount3 = percentCount + 1;
      setPercentCount(newCount3);
    }, 10);

    if (successCount >= stats.success || percentage)
      clearInterval(successCounter);
    if (totalCount >= stats.total || percentage) clearInterval(totalCounter);
    if (percentCount >= percent || !percentage) clearInterval(percentCounter);

    return () => {
      clearInterval(successCounter);
      clearInterval(totalCounter);
      clearInterval(percentCounter);
    };
  }, [successCount, totalCount, percentCount, stats, percent, percentage]);

  if (!stats) {
    return <></>;
  }

  return (
    <Container offset={offset}>
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
          className='blue'
          d='M 60 95 A 45 45 90 1 1 120 95'
          style={{ fill: 'none' }}
        />
        <text dominantBaseline='middle' x='50%' y='55%'>
          <tspan x='90%' dy='-5%'>
            {text}
          </tspan>
          <tspan x='90%' dy='10.5%'>
            {midText}
          </tspan>
          <Digit x='90%' dy='20.5%'>
            {percentage ? percentCount + `%` : successCount + `/` + totalCount}
          </Digit>
        </text>
      </svg>
    </Container>
  );
};

export default Gauge;
