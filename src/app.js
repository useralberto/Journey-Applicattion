import server from './confServer.js';
import "@babel/polyfill";


async function init(){
	await server.listen(5000);
}

init();
