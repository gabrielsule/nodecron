# nodeCron

### Instalación
```bash
npm node-cron
```

### Campos disponibles
| Campo            | Valor |
| -----------------| -----:|
| segundos         | 0-59  |
| minutos          | 0-59  |
| hora             | 0-23  |
| día del mes      | 1-31  |
| mes              | 1-12  |
| día de la semana | 0-7   |


### Código
```javascript
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
```

### Ejecución
```bash
npm index.js
```