const cron = require('node-cron');
const shell = require('node-exec');

let task = cron.schedule('30 20 * * *', () => {
    shell.run('notepad.exe').then((res) => {
        console.log('tarea ejecutada');
    });
}, {
    scheduled: true
});

task.start();