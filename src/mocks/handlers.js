import { rest } from 'msw';
import { nextLaunch, latestLaunch, queryAll } from './mockData';

const baseUrl = 'https://api.spacexdata.com/v4';

const handlers = [
  rest.get(`${baseUrl}/launches/next`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nextLaunch));
  }),
  rest.get(`${baseUrl}/launches/latest`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(latestLaunch));
  }),
  rest.post(`${baseUrl}/launches/query`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(queryAll));
  }),
];

export { handlers };
