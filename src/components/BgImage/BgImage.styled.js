import styled from 'styled-components';

export const BgImage = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: -99;
  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
