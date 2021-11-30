import styled from 'styled-components';
import Button from '../components/Button';

const InnerSection = styled.div`
  position: absolute;
  width: auto;
  bottom: 15%;
  left: 25px;
  right: 25px;
  color: white;

  @media (min-width: 768px) {
    bottom: 20%;
    left: 100px;
    right: 100px;
  }

  h3 {
    font-weight: normal;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const MainSection = ({ data }) => {
  console.log(data);
  return (
    <InnerSection>
      <h3>UPCOMING LAUNCH</h3>
      <h2>{data.name} MISSION</h2>
      <Button text={'WATCH WEBCAST'} />
    </InnerSection>
  );
};

export default MainSection;
