import { server } from './server.js';
import "@babel/polyill";

async function init() {
  await server.listen(5000);
}

init();