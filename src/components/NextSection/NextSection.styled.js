import styled from 'styled-components';

export const InnerSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  bottom: 5%;
  left: 25px;
  right: 25px;
  color: white;
  overflow: hidden;

  @media (min-width: 768px) {
    bottom: 20%;
    left: 100px;
    right: 100px;
    flex-direction: row-reverse;
  }

  h3 {
    padding-top: 2rem;
    font-weight: normal;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const DetailsWrapper = styled.div`
  overflow: hidden;

  button {
    color: rgba(250, 250, 250, 0.7);
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
  }

  p {
    background-color: rgb(5, 5, 7);
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 1px;
    transition: all 0.4s cubic-bezier(0.5, 0, 0, 0.7);
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'invisible')};
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0.9)')};

    @media (min-width: 768px) {
      width: 65%;
    }
  }
`;
