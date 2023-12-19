// Simple Loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Print First Script

let a = "First Script";
console.log(a);

// Running promise That can take some time

const mainfun = () => {
    let mypromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const config = true;
            if (!config) {
                reject("Error Found!!!");
            } else {
                resolve({
                    user: "Noman",
                    pwd: 123,
                })
            }
        }, 3000);
    })
    return mypromise;
}

mainfun().then((success) => {
    const username = success.user;
    const password = success.pwd;
    return username + " " + password;
    // console.log("Your code " + message + "Completed 💙💙💙")
})
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Some " + error + "💔💔💔");
    });

// Last Script running
let b = "Last Script";
console.log(b);




