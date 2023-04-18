import getUserData from "./module.js";

const input = document.querySelector('.input')
const button = document.querySelector('.button')
const result = document.querySelector('.result')

button.addEventListener('click', sendId)

function sendId(){
    let id = input.value
    
    getUserData(id)
        .then((data)=> {
            const stringData = JSON.stringify(data)
            result.innerHTML = stringData
        })
        .catch((e)=> result.innerHTML = e)    
        // .then((data)=> console.log(data))
        // .catch((e)=> console.log(e))
}
