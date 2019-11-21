const argv = require('./config/yargs').argv;
let command = argv._[0];
switch (command) {
    case 'create':
        console.log('Create');
        break;
    case 'list':
        console.log('list');
        break;
    case 'update':
        console.log('update');
        break;
    default:
        console.log('command is´nt reconigzed');
        break;
}