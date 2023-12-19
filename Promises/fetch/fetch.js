// Promises Using fetch 
const url = 'https://jsonplaceholder.typicode.com/todos/4'

const main = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((invalue) => {
                if (invalue.ok) {
                    return invalue.json();
                }
            }).then((result) => {
                resolve(result);
            }).catch(() => {
                reject("I Think network not working");
            })
    })
}


main().then((success) => {
    console.log(success)
}).catch((unsuccess) => {
    console.log("Error " + unsuccess + " 💔 💔 💔")
})






