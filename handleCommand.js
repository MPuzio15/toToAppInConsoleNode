const handleData = require('./handleData')

const handleCommand = ({add, remove, list}) => {
    if(add){
        if(typeof add !== 'string'){
            return console.log("Musisz podać tekst".red)
        }
        else if(add.length <7){
            return console.log("Nazwa zadania musi mieć więcej niż 6 znaków".red)
        }
        handleData(1, add)
    }
    else if(remove){
        if(typeof remove !== 'string' || remove.length < 7 ){
            return console.log("Wpisz nazwę usuwanego zadania, to musi być tekst i musi mieć więcej niż 6 znaków".red)
        }
        handleData(2, remove)
    }
    else if(list){
        handleData(3, null)
    }
    else{
        console.log("Nie rozumiem polecenia, użyj --add'nazwa zadania', --remove='nazwa zadania' lub opcji --list".red)
    }
}

module.exports = handleCommand;