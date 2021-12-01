import styled from 'styled-components';

export const BgImage = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: -99;
`;
