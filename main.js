import getUserData from "./module.js";

getUserData(3)
    .then((data)=> console.log(data))
    .catch((e)=> console.log(e))