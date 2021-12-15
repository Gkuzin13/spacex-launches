import { Td } from './StatsTable.styled';
import { YoutubeFilled } from '@ant-design/icons';

const Row = ({ stat, missionStatus, boostStatus }) => {
  return (
    <>
      <td data-label='Misson'>{stat.name}</td>
      <td data-label='Launch date'>
        {new Date(stat.date_local).toLocaleString({ date: '' })}
      </td>
      <td data-label='Launch location'>{stat.launchpad.locality}</td>
      <td data-label='Orbit'>{stat.payloads[0].orbit}</td>
      <td data-label='Payload type'>{stat.payloads[0].type}</td>
      <Td data-label='Launch status' status={missionStatus}>
        {missionStatus}
      </Td>
      <td data-label='Rocket'>{stat.rocket.name}</td>
      <td data-label='Booster'>{stat.cores[0].core.serial}</td>
      <Td data-label='BOOSTER LANDING' status={boostStatus}>
        {boostStatus}
      </Td>
      <td data-label='LAUNCH WEBCAST'>
        {stat.links.webcast ? (
          <a
            href={stat.links.webcast}
            target='_blank'
            rel='noopener noreferrer'>
            <YoutubeFilled />
          </a>
        ) : (
          'N/A'
        )}
      </td>
    </>
  );
};

export default Row;
