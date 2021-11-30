import { useEffect, useState } from 'react';
import { DigitContainer, Container, Digit, Border } from './Timer.styled';
import { calcTimeLeft } from '../../utils/calcTimeLeft';

const Timer = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(
    calcTimeLeft('Jan 5, 2022 15:37:25')
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calcTimeLeft('Jan 5, 2022 15:37:25'));
    }, 1000);

    return () => clearTimeout(id);
  });

  return (
    <Container>
      <div>
        <time dateTime={'Jan 5, 2022 15:37:25'} />
        <DigitContainer>
          <span>DAYS</span>
          <Digit>{timeLeft.days}</Digit>
        </DigitContainer>
        <DigitContainer>
          <span>HOURS</span>
          <Digit>{timeLeft.hours}</Digit>
        </DigitContainer>
        <DigitContainer>
          <span>MINUTES</span>
          <Digit>{timeLeft.minutes}</Digit>
        </DigitContainer>
        <DigitContainer>
          <span>SECONDS</span>
          <Digit>{timeLeft.seconds}</Digit>
        </DigitContainer>
      </div>
    </Container>
  );
};

export default Timer;
