import axios from "axios";

const getUserData = (id)=> {
    return new Promise(async(resolve, reject) => {
        if(isNaN(id)){
            reject("error: input can't be NaN")
        }else if(id>10) {
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

getUserData('dsafas')
    .then((data) => console.log(data))
    .catch((e)=> console.log(e))

export default getUserData
    