const nextLaunch = {
  name: 'next test',
  details: 'These are the details for the next test mission.',
  date_local: Date.now(),
};

const latestLaunch = {
  name: 'latest test',
  details: 'These are the details for the latest test mission.',
  date_local: Date.now(),
};

const queryAll = {
  docs: [
    {
      id: 1,
      cores: [
        {
          landing_attempt: true,
          landing_success: true,
          reused: false,
          core: {
            serial: 'B1',
          },
        },
      ],
      launchpad: {
        locality: 'Testpad 1',
      },
      payloads: [{ orbit: 'TST1' }],
      rocket: {
        name: 'Falcon 1',
      },
      fairings: {
        reused: true,
      },
      links: {
        webcast: 'youtubeurl.com',
      },
      name: 'Query all Test 1',
      details: 'These are the details for all launches test mission 1.',
      date_local: Date.now(),
      success: true,
    },
    {
      id: 2,
      cores: [
        {
          landing_attempt: true,
          landing_success: true,
          reused: true,
          core: {
            serial: 'B2',
          },
        },
      ],
      launchpad: {
        locality: 'Testpad 2',
      },
      payloads: [{ orbit: 'TST2' }],
      rocket: {
        name: 'Falcon 2',
      },
      fairings: {
        reused: false,
      },
      links: {
        webcast: 'youtubeurl.com',
      },
      name: 'Query all Test 2',
      details: 'These are the details for all launches test mission 2.',
      date_local: Date.now(),
      success: true,
    },
    {
      id: 3,
      cores: [
        {
          landing_attempt: false,
          landing_success: false,
          reused: false,
          core: {
            serial: '3',
          },
        },
      ],
      launchpad: {
        locality: 'Testpad 3',
      },
      payloads: [{ orbit: 'TST3' }],
      rocket: {
        name: 'Falcon 3',
      },
      fairings: {
        reused: false,
      },
      links: {
        webcast: 'youtubeurl.com',
      },
      name: 'Query all Test 3',
      details: 'These are the details for all launches test mission 3.',
      date_local: Date.now(),
      success: false,
    },
  ],
};

export { nextLaunch, latestLaunch, queryAll };
