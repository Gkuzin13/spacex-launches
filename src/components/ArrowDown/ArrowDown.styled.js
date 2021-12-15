import styled from 'styled-components';

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  left: 25%;
  right: 25%;
  font-size: 2.5rem;
  opacity: ${(props) => props.opacity};
`;
