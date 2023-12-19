// First Function
const main = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true;
            if (!check) {
                reject("Mehnat Barbaad 💔")
            } else {
                resolve("Successfully done " + value);
            }
        }, time)
    })
};

// Second Function
const second = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true;
            if (!check) {
                reject("Mehnat Barbaad 💔")
            } else {
                resolve("Successfully done " + value);
            }
        }, time)
    })
};

// Third Function
const third = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true;
            if (!check) {
                reject("Mehnat Barbaad 💔")
            } else {
                resolve("Successfully done " + value);
            }
        }, time)
    })
};

// Fourth Function
const fourth = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true;
            if (!check) {
                reject("Mehnat Barbaad 💔")
            } else {
                resolve("Successfully done " + value);
            }
        }, time)
    })
};


// This is called callback chain using .then.then.then blah blah blah.....😄
main(1000, "Data 1 💙 ").then((res1) => {
    console.log(res1)
    return second(2000, "Data 2 💙"); //Calling second function
}).then((res2) => {
    console.log(res2)
    return third(3000, "Data 3 💙"); //Calling third function
}).then((res3) => {
    console.log(res3)
    return fourth(4000, "Data 4 💙"); //Calling fourth function
}).then((res4) => {
    console.log(res4)
}).catch((error) => {
    console.log(error)
})

