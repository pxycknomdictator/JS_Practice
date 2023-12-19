const first = (callbacksecond) => {
    setTimeout(() => {
        console.log("First Data");
        callbacksecond(third); //Calling Second
    }, 2000)
}
const second = (callbackthird) => {
    setTimeout(() => {
        console.log("Second Data")
        callbackthird(fourth) //Calling Third
    }, 3000)
}

const third = (callbackfourth) => {
    setTimeout(() => {
        console.log("Third Data");
        callbackfourth(); //Calling Fourth
    }, 4000)
}

const fourth = () => {
    setTimeout(() => {
        console.log("Fourth Data")
    }, 5000)
}


first(second); //Calling first

