import { ErrorWrapper } from './Error.styled';
import { ExclamationCircleFilled } from '@ant-design/icons';

const Error = () => {
  return (
    <ErrorWrapper>
      <ExclamationCircleFilled />
      <br />
      <span>OOPS! SOMETHING WENT WRONG, PLEASE TRY AGAIN.</span>
    </ErrorWrapper>
  );
};

export default Error;
