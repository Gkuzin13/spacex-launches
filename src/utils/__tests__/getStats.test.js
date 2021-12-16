import getStats from '../getStats';
import { queryAll } from '../../mocks/mockData';

describe('getStats', () => {
  const stats = getStats(queryAll.docs);

  test('should return correct missions value', () => {
    expect(stats.missions).toStrictEqual({
      total: 3,
      success: 2,
      failure: 1,
    });
  });
  test('should return correct booster landings value', () => {
    expect(stats.boosterLandings).toStrictEqual({
      total: 2,
      success: 2,
      failure: 0,
    });
  });
  test('should return correct reused boosters value', () => {
    expect(stats.reusedBoosters).toStrictEqual({
      total: 2,
      success: 1,
      failure: 1,
    });
  });
  test('should return correct reused fairings value', () => {
    expect(stats.reusedFairings).toStrictEqual({
      total: 3,
      success: 1,
      failure: 2,
    });
  });
});
