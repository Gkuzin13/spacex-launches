import styled from 'styled-components';

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  position: absolute;
  bottom: 2.5%;
  left: 25%;
  right: 25%;
  opacity: ${(props) => props.opacity};
`;
