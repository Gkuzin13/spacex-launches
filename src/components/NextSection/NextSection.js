import { useState } from 'react';
import Timer from '../Timer/Timer';
import { DetailsWrapper, InnerSection } from './NextSection.styled';

const NextSection = ({ data }) => {
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <InnerSection>
      <Timer data={data.time_local} />
      <div>
        <h3>NEXT LAUNCH</h3>
        <h2>{data.name} MISSION</h2>
        <DetailsWrapper open={open}>
          <button onClick={() => setOpen(!open)}>
            {open ? 'HIDE DETAILS' : 'SHOW DETAILS'}
          </button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde,
            ex rem voluptates autem aliquid veniam quis temporibus repudiandae
            illo, nostrum, pariatur quae! At animi modi dignissimos corrupti
            placeat voluptatum!
          </p>
        </DetailsWrapper>
      </div>
    </InnerSection>
  );
};

export default NextSection;
