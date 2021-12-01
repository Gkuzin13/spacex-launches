import { useState } from 'react';
import { Container } from './DetailsWrapper.styled';

const DetailsWrapper = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <button onClick={() => setOpen(!open)}>
        {open ? 'HIDE DETAILS' : 'SHOW DETAILS'}
      </button>
      <p>{data.details}</p>
    </Container>
  );
};

export default DetailsWrapper;
