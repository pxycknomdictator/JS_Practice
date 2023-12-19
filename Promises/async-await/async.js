const url = "https://jsonplaceholder.typicode.com/posts"
const asynchronous = async () => {
    try {
        let fetching = await fetch(url);
        let inputData = await fetching.json();
        return [fetching, inputData];
    } catch (error) {
        console.log("Oh no Error found");
    }
}

asynchronous().then((output) => {
    console.log(output)
});






