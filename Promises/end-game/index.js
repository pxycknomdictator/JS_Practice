const main = () => {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((inputValue) => {
                if (inputValue.ok) {
                    return inputValue.json();
                }
            }).then((result) => {
                resolve(result)
            }).catch(() => {
                reject(`Something is wrong`)
            })
    })
}



const calling = async () => {
    try {
        let output1 = await main();
        console.log(output1);
    } catch (error) {
        console.log(`${error} Error found!!!`);
    }
}

calling();