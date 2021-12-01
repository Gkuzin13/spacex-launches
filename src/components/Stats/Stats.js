import { Container, Digit } from './Stats.style';
const Stats = () => {
  return (
    <Container>
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
        {/* <text x='200' y='30' fill='white' className='label'>
          FAILURES
          <tspan>85</tspan>
        </text> */}
      </svg>
    </Container>
  );
};

export default Stats;
