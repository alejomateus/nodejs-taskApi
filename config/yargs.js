const argv = require('yargs').
    command('list', '').
    command('create', '',  {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task to be done'
        }
    }).
    command('update', '',  {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task to be done'
        },
        complete:{
            default: true,
            alias: 'c',
            desc: 'Mark the task completed or pending'
        }
    }).argv;
module.exports = {
    argv
}