const getStats = (data) => {
  const missions = data.reduce(
    (acc, stat) => {
      if (stat.success) {
        acc.success++;
      } else {
        acc.failure++;
      }
      acc.total++;
      return acc;
    },
    { success: 0, failure: 0, total: 0 }
  );
  const boosterLandings = data.reduce(
    (acc, stat) => {
      if (stat.cores[0].landing_attempt && stat.cores[0].landing_success) {
        acc.total++;
        acc.success++;
      }
      if (stat.cores[0].landing_attempt && !stat.cores[0].landing_success) {
        acc.total++;
        acc.failure++;
      }
      return acc;
    },
    { success: 0, failure: 0, total: 0 }
  );
  const reusedBoosters = data.reduce(
    (acc, stat) => {
      if (stat.cores[0]?.landing_attempt) {
        if (stat.cores[0]?.reused) {
          acc.success++;
        } else {
          acc.failure++;
        }
        acc.total++;
      }
      return acc;
    },
    { success: 0, failure: 0, total: 0 }
  );
  const reusedFairings = data.reduce(
    (acc, stat) => {
      if (stat.fairings?.reused) {
        acc.success++;
      } else {
        acc.failure++;
      }
      acc.total++;
      return acc;
    },
    { success: 0, failure: 0, total: 0 }
  );
  return { missions, boosterLandings, reusedBoosters, reusedFairings };
};

export default getStats;
