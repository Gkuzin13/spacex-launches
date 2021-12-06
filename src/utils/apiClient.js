import client from './fetchSetup';

const getNextLaunch = async () => {
  return await client('launches/next', {
    method: 'GET',
  }).then(
    (data) => {
      return data;
    },
    (error) => {
      return error;
    }
  );
};

const getLatestLaunch = async () => {
  return await client('launches/latest', {
    method: 'GET',
  }).then(
    (data) => {
      return data;
    },
    (error) => {
      return error;
    }
  );
};

const getAllLaunches = async () => {
  return await client('launches/query', {
    method: 'POST',
    body: JSON.stringify({
      query: {
        upcoming: false,
      },
      options: {
        limit: 300,
        populate: [
          {
            path: 'launchpad',
            select: {
              locality: 1,
            },
          },
          {
            path: 'rocket',
            select: {
              name: 1,
            },
          },
          {
            path: 'payloads',
            select: {
              orbit: 1,
              type: 1,
            },
          },
          {
            path: 'cores.core',
            select: {
              serial: 1,
            },
          },
        ],
        sort: {
          date_unix: 'desc',
        },
      },
    }),
  }).then(
    (data) => {
      return data;
    },
    (error) => {
      return error;
    }
  );
};

export { getNextLaunch, getLatestLaunch, getAllLaunches };
