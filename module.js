import axios from "axios";

const getUserData = (id)=> {
    return new Promise(async(resolve, reject) => {
        if(id>10) {
            reject("error: input can't be bigger then 10")
        }else {
            const {data: user} = await axios('https://jsonplaceholder.typicode.com/users/'+id)
            const {data: userPosts} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+id)
            const allUserData = {
                user: user,
                userPosts: userPosts
            }
            
            resolve(allUserData)
            
        }
    })
}

getUserData(4)
    .then((user)=> console.log(user))
    .catch((e)=> console.log(e))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// https://jsonplaceholder.typicode.com/posts?userId=1](