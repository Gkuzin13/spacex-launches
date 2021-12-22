import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import imageSrc from '../../assets/launch_timelapse.jpg';
import { BgImage } from '../../components/BgImage/BgImage.styled';
import Navigation from '../../components/Navigation/Navigation';
import { InnerSection, Wrapper } from './Next.styled';
import Timer from '../../components/Timer/Timer';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import Error from '../../components/Error/Error';
import { fetchNextLaunch } from '../../features/nextSlice';

const Next = ({ isMobile }) => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.nextLaunch.status);
  const { data } = useSelector((state) => state.nextLaunch);

  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchNextLaunch());
    }
  }, [fetchStatus, dispatch]);

  if (fetchStatus === 'error') {
    return (
      <div>
        <Error />
      </div>
    );
  }

  if (!data) {
    return <div></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Navigation isMobile={isMobile} />
      <BgImage imgSrc={imageSrc} />
      <Wrapper>
        <InnerSection>
          <Timer date={data.date_local} />
          <div>
            <h3>next launch</h3>
            <h2>{data.name} mission</h2>
            <SectionDetails data={data.details} initState={false} />
          </div>
        </InnerSection>
      </Wrapper>
    </motion.div>
  );
};

export default Next;
