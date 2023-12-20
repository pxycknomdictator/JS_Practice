const firstFun = async (timer,value) => {
    try {
         setTimeout(() => {
            let check = true
            if (check) {
                console.log(`"Success " ${value} fetched`)
            }else{
                console.log("Something is wrong 💔")
            }
        }, timer);
    } catch (error) {
        throw new Error("Something is wrong 💔")
    }
}

const result = async ()=>{
    const fetching1 = await firstFun(5000, "Data-1 💙");
    const fetching2 = await firstFun(7000, "Data-2 💙");
    const fetching3 = await firstFun(8000, "Data-3 💙");
    const fetching4 = await firstFun(9000, "Data-4 💙");
    return [fetching1,fetching2,fetching3,fetching4];
}

result();


