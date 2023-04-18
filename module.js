import axios from "axios";

const getUserData = (id)=> {
    return new Promise(async(resolve, reject) => {
        const {data: user} = axios('https://jsonplaceholder.typicode.com/users/'+id)
    })
}



// fetch('https://jsonplaceholder.typicode.com/todos/1')