const { exec } = require('child_process');
const path = require('path');
const readline = require('readline');

const directories = [
    './packages/core/base',
    './packages/core/react',
    './packages/ui',
    './packages/wallets/leo'
];

const commands = [
    'yarn build',
    'yarn doc'
    // 'npm publish' will be handled separately to include OTP
];

function runCommand(directory, command) {
    return new Promise((resolve, reject) => {
        exec(command, { cwd: path.resolve(directory) }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ${command} in ${directory}:`, error);
                return reject(error);
            }

            if (stderr) {
                console.error(`Error output from ${command} in ${directory}:`, stderr);
            }

            console.log(`Output from ${command} in ${directory}:`, stdout);
            resolve();
        });
    });
}

async function getOtp() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Please enter your OTP from your authenticator app: ', (otp) => {
            rl.close();
            resolve(otp.trim());
        });
    });
}

async function publishPackages() {
    const otp = await getOtp();

    for (let dir of directories) {
        for (let cmd of commands) {
            await runCommand(dir, cmd);
        }
        // Handle npm publish separately to include OTP
        await runCommand(dir, `npm publish --otp=${otp}`);
    }

    console.log("All packages published successfully!");
}

publishPackages().catch(error => {
    console.error("Error publishing packages:", error);
});