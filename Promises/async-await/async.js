const url = "https://jsonplaceholder.typicode.com/posts"
const asynchronous = async () => {
    try {
        let fetching = await fetch(url);
        let inputData = await fetching.json();
        console.log(inputData);
    } catch (error) {
        console.log("Oh no Error found");
    }
}

asynchronous();




