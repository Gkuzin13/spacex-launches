import { useState, useEffect } from 'react';
import { Container, Digit } from './Stats.style';
import calcOffset from '../../utils/calcOffset';
const Stats = () => {
  const [number, setnumber] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {}, 1000);

    return () => clearTimeout(id);
  });
  const offset = calcOffset(50);

  return (
    <Container offset={offset}>
      <div></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='40 10 100 90'>
        <path
          class='grey'
          d='M 60 95 A 45 45 90 1 1 120 95'
          style={{ fill: 'none' }}
        />
        <path
          class='purple'
          d='M 60 95 A 45 45 90 1 1 120 95'
          style={{ fill: 'none' }}
        />
        <text dominantBaseline='middle' x='50%' y='50%' fill='white'>
          <tspan x='90%' dy='0%'>
            SUCCESS RATE
          </tspan>
          <Digit x='90%' dy='25%'>
            50%
          </Digit>
        </text>
      </svg>
    </Container>
  );
};

export default Stats;
