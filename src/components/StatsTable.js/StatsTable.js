import { Table, TableScroll, TableWrapper, Td } from './StatsTable.styled';
import { YoutubeFilled } from '@ant-design/icons';

const StatsTable = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th scope='col'>MISSION</th>
            <th scope='col'>LAUNCHED</th>
            <th scope='col'>LOCATION</th>
            <th scope='col'>ORBIT</th>
            <th scope='col'>PAYLOAD TYPE</th>
            <th scope='col'>LAUNCH STATUS</th>
            <th scope='col'>ROCKET</th>
            <th scope='col'>BOOSTER</th>
            <th scope='col'>BOOSTER LANDING</th>
            <th scope='col'>LAUNCH WEBCAST</th>
          </tr>
        </thead>
        <tbody>
          {data.docs.map((stat) => {
            let boostStatus = stat.cores[0].landing_success;

            return (
              <tr key={stat.id}>
                <td data-label='Misson'>{stat.name}</td>
                <td data-label='Launch date'>
                  {new Date(stat.date_local).toUTCString()}
                </td>
                <td data-label='Launch location'>{stat.launchpad.locality}</td>
                <td data-label='Orbit'>{stat.payloads[0].orbit}</td>
                <td data-label='Payload type'>{stat.payloads[0].type}</td>
                <Td data-label='Launch status' success={stat.success}>
                  {stat.success ? 'SUCCESS' : 'FAILURE'}
                </Td>
                <td data-label='Rocket'>{stat.rocket.name}</td>
                <td data-label='Booster'>{stat.cores[0].core.serial}</td>
                <Td data-label='BOOSTER LANDING' success={boostStatus}>
                  {boostStatus ? 'SUCCESS' : 'FAILURE'}
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default StatsTable;
