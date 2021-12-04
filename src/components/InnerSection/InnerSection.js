import { Container } from './InnerSection.styled';
import DetailsWrapper from '../DetailsWrapper/DetailsWrapper';
import Button from '../Button';
import Timer from '../Timer/Timer';

const InnerSection = ({ data, setVideoOpen }) => {
  console.log(data);
  return (
    <Container>
      {data.upcoming && <Timer data={data} />}
      <div>
        <h3>{data.upcoming ? 'NEXT LAUNCH' : 'RECENT LAUNCH'}</h3>
        <h2>{data.name} MISSION</h2>
        {data?.links?.webcast && (
          <Button text={'WATCH WEBCAST'} setVideoOpen={setVideoOpen} />
        )}
        {data.details && <DetailsWrapper data={data} />}
      </div>
    </Container>
  );
};

export default InnerSection;
