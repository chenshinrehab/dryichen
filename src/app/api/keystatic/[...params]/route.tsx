import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config'; // 注意路徑要指回根目錄的 config

export const { GET, POST } = makeRouteHandler({
  config,
});