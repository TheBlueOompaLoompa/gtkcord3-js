import { isMainThread, Worker, workerData, parentPort } from 'worker_threads';
import * as discord from 'discord.io';

var client: discord.Client;

export function loginWithToken(token: string, successCallback: Function) {
    // Create worker
    const worker = new Worker(__filename, {
        workerData: token
    });

    worker.on('message', msg => {
        if(msg === 'success'){
            successCallback(client);
        }
    });
    worker.on('error', console.error);
    worker.on('exit', (code) => {
        if (code !== 0)
        console.error(new Error(`Worker stopped with exit code ${code}`));
    });
}

if(!isMainThread){
    console.log('Logging in');
    var token = typeof workerData == typeof '' ? workerData : '';

    // Log in
    client = new discord.Client({
		token,
		autorun: true,
	});

    client.on('ready', () => {
        console.log(`Logged in at ${client.username}#${client.discriminator}`)
        parentPort.postMessage('success');
    });

    client.on('disconnect', (errMsg, code) => {
        parentPort.postMessage(`Error:"${errMsg}" with code ${code}`);
    });
}