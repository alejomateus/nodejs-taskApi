const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to be done'
};
const complete = {
    default: true,
    alias: 'c',
    desc: 'Mark the task completed or pending'
};
const argv = require('yargs').
    command('list', '', {
        complete
    }).
    command('create', '', {
        description
    }).
    command('update', '', {
        description,
        complete
    }).
    command('delete', '', {
        description
    }).argv;
module.exports = {
    argv
}