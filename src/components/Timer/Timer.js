import { useEffect, useState } from 'react';
import { DigitContainer, Container, Digit } from './Timer.styled';
import { calcTimeLeft } from '../../utils/calcTimeLeft';

const Timer = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(date));

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calcTimeLeft(date));
    }, 1000);

    return () => clearTimeout(id);
  });

  return (
    <Container>
      <div>
        <time dateTime={date} />
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
