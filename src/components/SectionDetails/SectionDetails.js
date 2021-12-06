import { useState } from 'react';
import { Container } from './/SectionDetails.styled';

const SectionDetails = ({ data }) => {
  const [open, setOpen] = useState(false);

  if (!data) {
    return (
      <Container open={true}>
        <p>DETAILS ARE CURRENTLY UNAVAILABLE</p>
      </Container>
    );
  }

  return (
    <Container open={open}>
      <button onClick={() => setOpen(!open)}>
        {open ? 'HIDE DETAILS' : 'SHOW DETAILS'}
      </button>
      <p>{data}</p>
    </Container>
  );
};

export default SectionDetails;
