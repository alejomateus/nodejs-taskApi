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
const getList = ()=>{
    loadDB();
    return listToDo;
}
module.exports = {
    create, 
    getList
}