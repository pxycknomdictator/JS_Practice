const Object = {
    username: "Noman",
    email: "abc@gmail.com",
    getinfo: function () {
        console.log(`${this.username}`);
        console.log(`${this.email}`);
    }
}

Object.getinfo();




const anotherObject = {
    username: "Aptech",
    email: "aptechinfo@gmail.com",
    info: () => {
        console.log(`${this.username}`); // this will give you undefined 
        console.log(this); // 'this' keyword empty object in arrow function
    }
}

anotherObject.info()




const lastObject = {
    username: "Noman",
    email: "abc@gmail.com",
    lastinfo:  function (){
        console.log(this); // this will give you owner object { lastObject }
    }
}

lastObject.lastinfo();

lastObject.username = "JavaScript"; // value of username is changed Noman --> JavaScript

lastObject.lastinfo();




