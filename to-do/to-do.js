const fs = require('fs');
let listToDo = [];
const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Couldn´t save', err);
    });
}
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
        console.log(listToDo);
    } catch (error) {
        listToDo = [];
    }

}
const create = (description) => {
    loadDB();
    let toDo = {
        description,
        complete: false
    }
    listToDo.push(toDo);
    saveDB();
    return toDo;
}
const update = (description, complete = true) => {
    loadDB();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
}
const deleteTask = (description) => {
    loadDB();
    let newListToDo = listToDo.filter(task => task.description !== description);
    if (newListToDo.length === listToDo.length) {
        listToDo[index].complete = complete;
        return false;
    } else {
        listToDo = newListToDo
        saveDB();
        return true;
    }
}
const getList = (complete) => {
    loadDB();
    let list = [];
    complete = complete === 'false' ? false : complete === 'true' ? true : true;
    list = listToDo.filter(task => task.complete === complete);
    if (complete === undefined)
        list = listToDo;
    return list;
}
module.exports = {
    create,
    getList,
    update,
    deleteTask
}