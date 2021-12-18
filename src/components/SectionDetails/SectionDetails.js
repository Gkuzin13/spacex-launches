import { useState } from 'react';
import { Container } from './/SectionDetails.styled';
import { RightOutlined } from '@ant-design/icons';

const SectionDetails = ({ data, initState }) => {
  const [open, setOpen] = useState(initState);

  if (!data) {
    return (
      <Container open={true}>
        <p>DETAILS ARE CURRENTLY UNAVAILABLE</p>
      </Container>
    );
  }

  return (
    <Container open={open} details={data && true}>
      <button onClick={() => setOpen(!open)}>
        <RightOutlined /> {open ? 'HIDE DETAILS' : 'SHOW DETAILS'}
      </button>
      <p>{data}</p>
    </Container>
  );
};

export default SectionDetails;
