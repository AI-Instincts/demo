import { exec } from 'child_process';
import type { RequestHandler } from '@sveltejs/kit';

// Convert the exec function to return a promise
function execPromise(command: string) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

export const GET: RequestHandler = async () => {
    try {
        console.log("Received request to run .bat file.");
        await execPromise('C:\\Python_Basheer\\Sales_Force\\Archive\\run.bat');
        console.log(".bat file executed successfully.");
        return new Response('.bat file executed successfully.', { status: 200 });
    } catch (error) {
        console.error(`exec error: ${error}`);
        return new Response('Failed to run .bat file.', { status: 500 });
    }
};
