import { Table, TableScroll, TableWrapper } from './StatsTable.styled';

const StatsTable = ({ data }) => {
  return (
    <TableWrapper>
      <TableScroll>
        <Table>
          <caption>LAUNCHES STATISTICS</caption>
          <thead>
            <tr>
              <th scope='col'>LAUNCHED</th>
              <th scope='col'>LOCATION</th>
              <th scope='col'>ORBIT</th>
              <th scope='col'>MISSION</th>
              <th scope='col'>PAYLOAD TYPE</th>
              <th scope='col'>LAUNCH STATUS</th>
              <th scope='col'>ROCKET</th>
              <th scope='col'>BOOSTER</th>
              <th scope='col'>BOOSTER LANDING</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stat) => {
              return (
                <tr key={stat.id}>
                  <td data-label='Launch date'>
                    {new Date(stat.date_local).toUTCString()}
                  </td>
                  <td data-label='Launch location'>
                    {stat.launchpad.locality}
                  </td>
                  <td data-label='Orbit'>{stat.payloads[0].orbit}</td>
                  <td data-label='Misson'>{stat.name}</td>
                  <td data-label='Payload type'>{stat.payloads[0].type}</td>
                  <td data-label='Launch status'>
                    {stat.success ? 'SUCCESS' : 'FAILURE'}
                  </td>
                  <td data-label='Rocket'>{stat.rocket.name}</td>
                  <td data-label='Booster'>{stat.cores[0].core.serial}</td>
                  <td data-label='BOOSTER LANDING'>
                    {stat.cores[0].landing_success ? 'SUCCESS' : 'FAILURE'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableScroll>
    </TableWrapper>
  );
};

export default StatsTable;
