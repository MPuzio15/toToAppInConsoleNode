const colors = require('colors')
const fs = require('fs')

const handleData = (type, title) => {
    // const data = fs.readFileSync('datadb.json', 'utf8')
    const data = fs.readFileSync('datadb.json')
    let tasks = JSON.parse(data)

    if(type === 1||type === 2){
        let isExisting = tasks.find(task => task.title === title) ? true : false
        if(type === 1 && isExisting) {
            return console.log("Zadanie już istnieje".red)
        }
        else if(type === 2 && !isExisting) {
            return console.log("Nie ma takiego zadania".red)
        }
    }
    let dataJSON = ''
    switch (type) {
        case 1:
            tasks = tasks.map((task, index)=> ({id: index + 1, title: task.title}))
            const id = tasks.length + 1
            tasks.push({id, title})
            dataJSON = JSON.stringify(tasks)
            fs.writeFileSync('datadb.json', dataJSON)
            console.log(`Dodano zadanie: ${title}`.black.bgGreen)
            break;
        case 2:
            const index = tasks.findIndex(task=> task.title === title)
            tasks.splice(index, 1)
            tasks = tasks.map((task, index)=> ({id: index + 1, title: task.title}))
            dataJSON = JSON.stringify(tasks)
            fs.writeFile('datadb.json', dataJSON, 'utf8', (err)=>{
                if(err) throw err
                console.log(`Zadanie usunięto: ${title}`.black.bgGreen)
            })
            break
        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji: `)
            if(tasks.length>0){
                tasks.forEach((element, index) => {
                    if(index % 2) return console.log(element.title.green)
                    return console.log(element.title.yellow)
                });
            }
            break
        default: console.log("Nie wiem o co chodzi")
    }
}

module.exports = handleData;