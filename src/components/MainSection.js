import styled from 'styled-components';
import Button from '../components/Button';

const InnerSection = styled.div`
  color: white;

  h3 {
    font-weight: 400;
  }
  h2 {
    font-size: 2rem;
  }
`;

const MainSection = ({ data }) => {
  console.log(data);
  return (
    <InnerSection>
      <h3>RECENT LAUNCH</h3>
      <h2>{data.name} MISSION</h2>
      <Button text={'WATCH WEBCAST'} />
    </InnerSection>
  );
};

export default MainSection;
