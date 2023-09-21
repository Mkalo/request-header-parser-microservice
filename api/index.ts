import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';

export const config = {
  runtime: 'edge',
};

export const app = new Hono({ strict: false }).basePath('/api');

app.use('*', cors());

export default handle(app);
