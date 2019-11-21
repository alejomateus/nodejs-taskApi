const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const color = require('colors');

let command = argv._[0];
switch (command) {
    case 'create':
        console.log('Create');
        let task = toDo.create(argv.description)
        console.log(task);
        break;
    case 'list':
        let list = toDo.getList();
        list.forEach(task => {
            console.log('=======To Do======'.green);
            console.log(task.description);
            console.log('State',task.complete);
            console.log('=================='.green);            
        });
        console.log('list');
        break;
    case 'update':
        console.log('update');
        break;
    default:
        console.log('command is´nt reconigzed');
        break;
}